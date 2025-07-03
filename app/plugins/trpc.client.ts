import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~~/server/trpc/routers';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      trpc: createTRPCNuxtClient<AppRouter>({
        links: [httpBatchLink({ url: '/api/trpc' })],
      }),
    },
  }
});
