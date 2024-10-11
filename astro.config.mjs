import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  redirects: {
    "/discord": {
      status: 308,
      destination: "https://discord.gg/fqJmXyEpEj",
    },
    "/gitbot/invite": {
      status: 308,
      destination: "https://discord.com/oauth2/authorize?client_id=695588314765459488",
    },
    "/gitbot/repo": {
      status: 308,
      destination: "https://github.com/norowachi/gitbot",
    },
  },
});
