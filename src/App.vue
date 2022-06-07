<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  /* TODO: Set a max width here or use media queries? */
  max-width: 1007px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
