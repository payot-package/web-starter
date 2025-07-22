export function useTRPCCache(key: string) {
  return {
    queryKey: key,
    getCachedData: (k: string) => useNuxtData(k).data.value,
  }
}