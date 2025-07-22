import { t } from '../init';

export const appRouter = t.router({
  test: t.procedure.query(() => {
    return 'Hello, world!';
  }),
});

export type AppRouter = typeof appRouter;