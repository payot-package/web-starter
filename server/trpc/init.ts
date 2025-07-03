import { initTRPC } from '@trpc/server';
import type { H3Event } from 'h3';

export const createTRPCContext = async (event: H3Event) => {
  /**
  * @see: https://trpc.io/docs/server/context
  */
  return {};
}

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
export const t = initTRPC.context<Awaited<ReturnType<typeof createTRPCContext>>>()
  .create({
    /**
    * @see https://trpc.io/docs/server/data-transformers
    */
    // transformer: superjson,
  });