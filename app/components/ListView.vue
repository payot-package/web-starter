<script setup lang="ts" generic="T">
import type { AsyncDataRequestStatus } from '#app';

const props = defineProps<{
  status: AsyncDataRequestStatus;
  items?: T[];
}>();

defineExpose();
const list_length = computed(() => {
  return props.items ? props.items.length : 0;
});

</script>

<template>
  <AsyncView v-bind="$attrs" :status>
    <template #header>
      <slot name="header" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #default>
      <slot name="empty" v-if="list_length === 0" />
      <slot v-if="list_length > 0" :items="items" />
    </template>

    <template #footer>
      <slot name="footer" />
    </template>
  </AsyncView>
</template>
