<script setup lang="ts">
import type { AsyncDataRequestStatus } from '#app';

defineProps<{
  status: AsyncDataRequestStatus;
}>();

</script>

<template>
  <HolyGrail v-bind="$attrs">
    <template #header>
      <slot name="header" />
    </template>
    <slot v-if="status === 'error'" name="error" />
    <slot v-else-if="status === 'pending'" name="loading" />
    <slot v-else />
    <template #footer>
      <slot name="footer" />
    </template>
  </HolyGrail>
</template>
