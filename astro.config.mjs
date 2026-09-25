import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// alfredadarkwah.com is the canonical domain; fredoshouse.com points here too.
export default defineConfig({
  site: "https://alfredadarkwah.com",
  integrations: [sitemap()],
  // Pages are static; only /api/ask runs on the server (as a Vercel function).
  adapter: vercel(),
});
