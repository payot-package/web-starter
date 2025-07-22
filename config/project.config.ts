
export default defineNuxtConfig({
  ssr: false,
  components: [
    '~/components',
    { path: '~/pages', pattern: '**/components/**' },
  ],
  imports: {
    dirs: ['~~/types', '~~/constant'],
    presets: [
      { from: 'maska/vue', imports: ['vMaska'] },
      { from: '@nuxt/ui', imports: ['FormErrorEvent', 'FormSubmitEvent'], type: true },
      { from: '@vueuse/router', imports: ['useRouteQuery', 'useRouterParams'] },
      { from: 'zod/v4', imports: ['z'] },
    ]
  },
  build: { transpile: ['trpc-nuxt'] },
  dayjs: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    defaultTimezone: 'Asia/Seoul',
    plugins: ['timezone', 'isBetween', 'isSameOrAfter', 'isSameOrBefore', 'arraySupport'],
  },
  $development: {
    devServer: {
      port: 3000,
      host: 'localhost',
    }
  }
})