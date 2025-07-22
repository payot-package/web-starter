import { useStorage, StorageSerializers } from '@vueuse/core'

export function useLocalStorage<T>(key: string, initialValue: T) {
  return useStorage(key, initialValue, localStorage, {
    serializer: StorageSerializers.object,
  });
}