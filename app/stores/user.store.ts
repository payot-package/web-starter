
export const useUserStore = defineStore('user', () => {
  const id = ref(1);
  return { id }
}, { persist: { storage: sessionStorage } });