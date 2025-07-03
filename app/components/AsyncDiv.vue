<script setup lang="ts" generic="T">
const props = defineProps<{
  request: () => Promise<T>;
}>();

const { data, error, status, refresh } = useAsyncData(props.request);

defineExpose({ refresh });
</script>

<template>
  <div v-bind="$attrs">
    <slot v-if="status === 'success'" :data="data" />
    <slot v-else-if="status === 'error'" :error="error" name="error" />
    <slot v-else-if="status === 'pending'" :loading="true" name="loading" />
    <slot v-else name="idle" />
  </div>
</template>