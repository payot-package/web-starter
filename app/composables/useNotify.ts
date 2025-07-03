import type { Toast } from "@nuxt/ui/runtime/composables/useToast.js";

export function useNotify(data: Partial<Toast>) {
  return useToast().add(data);
}