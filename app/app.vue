<script setup lang="ts">
import { ko } from '@nuxt/ui/locale';

</script>

<template>
  <UApp :locale="ko" :toaster="{ position: 'top-right', duration: 2000, progress: false }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>