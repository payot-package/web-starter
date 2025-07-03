<script setup lang="ts">

type Props = {
  message?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [void];
}>();

</script>

<template>
  <UModal :ui="{ overlay: 'blur-sm', content: 'flex bg-transparent' }" fullscreen :dismissible="false" :transition="false">
    <template #content>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <p class="text-sm text-gray-500">{{ message ?? '자료를 불러오는 중 입니다' }}</p>
        </div>
      </div>
    </template>
  </UModal>
</template>