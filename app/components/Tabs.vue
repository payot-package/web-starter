<script setup lang="ts">

const props = defineProps<{
  tabs: readonly string[];
}>();

const active = defineModel<string>({ default: props.tabs[0] });

</script>

<template>
  <HolyGrail>
    <template #header>
      <slot name="header" />
    </template>

    <template #default>
      <div v-for="tab in props.tabs" :key="tab">
        <slot v-if="active === tab" :name="tab" />
      </div>
    </template>

    <template #footer>
      <slot name="footer" />
    </template>
  </HolyGrail>
</template>
