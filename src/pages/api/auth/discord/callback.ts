export const prerender = false;
import { type APIRoute } from "astro";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const url = new URL(request.url);
  const callback = decodeURIComponent(url.searchParams.get("state") || "/");
  const code = url.searchParams.get("code");

  const result = await fetch("https://discord.com/api/oauth2/token", {
    body: JSON.stringify({
      client_id: import.meta.env.DISCORD_CLIENT_ID,
      client_secret: import.meta.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: `${url.origin}/api/auth/discord/callback`,
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).catch(() => {});

  if (!result) return redirect("/api/auth/discord/login", 302);

  const data = await result.json();

  cookies.set("token", data.access_token, {
    expires: new Date(Date.now() + data.expires_in * 1000),
    // httpOnly: true,
    sameSite: "strict",
    // secure: true,
    path: "/",
  });

  return redirect(callback || "/", 302);
};
