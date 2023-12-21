import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  build: {
    // Generate `page.html` instead of `page/index.html` during build.
    format: "file"
  },
  integrations: [tailwind(), compress()]
});
