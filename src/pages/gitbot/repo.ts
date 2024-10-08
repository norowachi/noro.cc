import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
  // 308 Permanent Redirect - with same method
  return redirect("https://github.com/norowachi/gitbot", 308);
};
