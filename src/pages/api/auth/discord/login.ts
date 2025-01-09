export const prerender = false;
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  // state
  const callback = encodeURIComponent(url.searchParams.get("state") || "/");
  const redirect_uri = encodeURIComponent(
    `${url.origin}/api/auth/discord/callback`,
  );
  const scopes = ["identify"].join("%20");
  const authLink = `https://discord.com/api/oauth2/authorize?client_id=${import.meta.env.DISCORD_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code&scope=${scopes}&state=${callback}&prompt=none`;
  return redirect(authLink, 302);
};
