import type { AsyncDataOptions } from "#app";

/**
 * 페이지 이동시에도 데이터가 보존되어야 한다면
 * 
 * @param key 
 * @param fetcher 
 * @param options 
 * @returns 
 */
export function useAsyncCacheData<T>(key: MaybeRefOrGetter<string>, fetcher: () => Promise<T>, options?: AsyncDataOptions<T>) {
  return useAsyncData<T>(key, fetcher, {
    server: false,
    getCachedData(key, app) {
      return app.payload.data[key];
    },
    ...options,
  })
}