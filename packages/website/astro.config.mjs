// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
    server: {
      cors: { preflightContinue: true },
    },
  },

  adapter: node({
    mode: "standalone",
  }),

  integrations: [mdx()],

  markdown: {
    shikiConfig: {
      theme: "catppuccin-latte",
    },
  },
});
