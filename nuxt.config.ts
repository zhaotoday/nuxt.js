import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  srcDir: "src/",
  dir: {
    pages: "views",
  },
  css: ["@/assets/styles/global/index.scss"],
  build: {
    extractCSS: true,
  },
  app: {
    head: {
      title: "福建省智慧医工联合工程研究中心",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "my app description",
        },
      ],
    },
  },
  privateRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
