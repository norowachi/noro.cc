import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
  // 308 Permanent Redirect - with same method
  return redirect(
    "https://discord.com/oauth2/authorize?client_id=695588314765459488",
    308,
  );
};
