<script setup lang="ts">
type Props = {
  title?: string;
  message?: string;
  button?: {
    ok?: string;
    cancel?: string;
  }
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [boolean];
}>();

const response = (state: boolean) => emit('close', state);
</script>

<template>
  <UModal :title="title" :description="message" :close="false" :ui="{ footer: 'flex justify-end gap-2' }">
    <template #footer>
      <UButton @click="response(false)" color="neutral" variant="outline">{{ button?.cancel ?? '취소' }}</UButton>
      <UButton @click="response(true)" color="primary">{{ button?.ok ?? '확인' }}</UButton>
    </template>
  </UModal>
</template>