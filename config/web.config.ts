export default defineNuxtConfig({
  app: {
    head: {
      title: 'Web App',
      htmlAttrs: {
        lang: 'ko',
      },
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  $development: {
    app: {
      head: {
        title: 'Web App - Development',
        meta: [
          { name: 'description', content: 'Development version of the web app' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
      }
    }
  },
});
