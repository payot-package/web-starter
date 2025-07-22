// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['./config/project.config.ts', './config/web.config.ts', './config/env.config.ts'],
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-typed-router',
  ],
  ui: { colorMode: false },
  css: ['~/assets/css/main.css'],
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-27',

})