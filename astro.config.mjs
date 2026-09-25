import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// alfredadarkwah.com is the canonical domain; fredoshouse.com points here too.
export default defineConfig({
  site: "https://alfredadarkwah.com",
  integrations: [sitemap()],
});
