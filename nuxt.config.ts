// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxt/ui', '@nuxt/eslint', 'nuxt-typed-router', 'dayjs-nuxt'],
  ui: { colorMode: false },
  css: ['~/assets/css/main.css'],
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-27',
  extends: ['./config/project.config.ts', './config/web.config.ts', './config/env.config.ts'],
})