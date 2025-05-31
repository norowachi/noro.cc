import { defineConfig } from "astro/config";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), svelte()],
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});