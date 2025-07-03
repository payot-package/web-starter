<script setup lang="ts">

definePageMeta({
  validate: route => z.object({
    user: z.coerce.number().int().positive(),
  }).safeParse(route.params).success,
})

</script>

<template>

</template>