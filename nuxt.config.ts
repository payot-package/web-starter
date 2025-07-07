// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  components: [
    '~/components',
    { path: '~/pages', pattern: '**/components/**' },
  ],
  imports: {
    dirs: ['~~/types'],
    presets: [
      { from: 'maska/vue', imports: ['vMaska'] },
      { from: '@nuxt/ui', imports: ['FormErrorEvent', 'FormSubmitEvent'], type: true },
      { from: '@vueuse/router', imports: ['useRouteQuery', 'useRouterParams'] },
      { from: 'zod/v4', imports: ['z'] }
    ]
  },
  pinia: {
    storesDirs: ['~/stores'],
  },
  build: { transpile: ['trpc-nuxt'] },
})