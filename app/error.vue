<script setup lang="ts">

const error = useError();

</script>

<template>
  <div>
    <h1>
      {{ error?.message }}
      <br />
      {{ error?.statusCode }}
      <br />
      {{ error?.statusMessage }}
      <br />
      {{ JSON.stringify(error?.data ?? {}) }}
    </h1>
  </div>
</template>