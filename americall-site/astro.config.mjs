// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Same as site.url in src/data/site.ts. The sitemap needs it for absolute URLs.
  site: "https://americall.io",
  // /about/ only redirects to /services/, so it stays out of the sitemap. The 404 page is left out by default.
  integrations: [sitemap({ filter: (page) => !page.endsWith("/about/") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
