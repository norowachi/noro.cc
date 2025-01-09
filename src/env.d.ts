/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly DISCORD_CLIENT_ID: string;
  readonly DISCORD_CLIENT_SECRET: string;
  readonly DISCORD_APPEALS_WEBHOOK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
