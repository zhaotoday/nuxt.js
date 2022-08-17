import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  srcDir: "src/",
  css: ["@/assets/styles/global/index.scss"],
  build: {
    extractCSS: true,
  },
  privateRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
