import { useStorage } from '@vueuse/core'

export function useStorageObject<T extends object | undefined>(key: string, defaultValue: T | undefined, storage: Storage) {
  return useStorage(key, defaultValue, storage, {
    mergeDefaults: false,
    serializer: {
      read: row => row ? JSON.parse(row) : undefined,
      write: value => JSON.stringify(value),
    },
  });
}