<script setup lang="ts">

const { status } = useAsyncData(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded successfully');
    }, 2000);
  })
);

</script>

<template>
  <ListView :status>
    <template #header>
      <div class="header">
        <h1>Welcome to the Index Page</h1>
      </div>
    </template>
  </ListView>
</template>
