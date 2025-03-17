import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    react(),
    icon()
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: 'https://portfolio-shyam.vercel.app',
  // base: '/jeeltikiwala.github.io',
});
