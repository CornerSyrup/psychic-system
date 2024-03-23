import { defineConfig } from "vitepress";

import packageJson from "../../package.json";

export default defineConfig({
  title: packageJson.displayName,
  description: packageJson.description,

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [],

    sidebar: [],

    footer: {
      copyright:
        `Copyright &copy; 2024 - present ${packageJson.author.name}. ` +
        `All rights reserved.`,
    },
  },

  base: "/psychic-system/docs/",
  outDir: "../dist/docs",
  cleanUrls: true,
});
