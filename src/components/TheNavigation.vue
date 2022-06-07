<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 10px 5px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  box-shadow: 0 1px 5px lightgray;
}
</style>
