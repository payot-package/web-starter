<script setup lang="ts">
import type { ToasterProps } from '#ui/types';
import { ko } from '@nuxt/ui/locale';

const toaster: ToasterProps = {
  position: 'top-right',
  duration: 2000,
  progress: false,
};

</script>

<template>
  <UApp :locale="ko" :toaster>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>