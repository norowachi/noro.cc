export const prerender = false;
import { encryptToken } from "@/components/functions";
import { type APIRoute, type AstroCookieSetOptions } from "astro";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const url = new URL(request.url);
  const callback = decodeURIComponent(url.searchParams.get("state") || "/");
  const code = url.searchParams.get("code");

  if (!code) return redirect("/api/auth/discord/login", 302);

  const result = await fetch("https://discord.com/api/v10/oauth2/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: `${url.origin}/api/auth/discord/callback`,
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${import.meta.env.DISCORD_CLIENT_ID}:${import.meta.env.DISCORD_CLIENT_SECRET}`)}`,
    },
  }).catch(console.error);

  if (!result) return redirect("/api/auth/discord/login", 302);

  const data = await result.json();

  if (!data.access_token) return redirect("/api/auth/discord/login", 302);

  const cookieOptions: AstroCookieSetOptions = {
    expires: new Date(Date.now() + data.expires_in * 1000),
    // httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
  };
  cookies.set("token", encryptToken(data.access_token), cookieOptions);
  const user = await fetch("https://discord.com/api/v10/users/@me", {
    headers: {
      Authorization: `Bearer ${data.access_token}`,
    },
  })
    .then((res) => res.json())
    .catch(console.error);

  if (!user)
    return new Response(
      JSON.stringify({
        message: "Unauthorized",
      }),
      { status: 401 },
    );

  cookies.set("discord-id", user.id, cookieOptions);
  cookies.set("discord-username", user.username, cookieOptions);
  cookies.set("discord-avatar", user.avatar, cookieOptions);

  return redirect(callback || "/", 302);
};
