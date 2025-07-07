<script setup lang="ts">
import type { AsyncDataRequestStatus } from '#app';

const props = defineProps<{
  status: AsyncDataRequestStatus;
}>();
</script>

<template>
  <div v-bind="$attrs">
    <slot v-if="props.status === 'error'" name="error" />
    <slot v-else-if="props.status === 'pending'" name="loading" />
    <slot v-else />
  </div>
</template>
