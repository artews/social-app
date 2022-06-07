<script setup lang="ts">
import RouteName from '@/router/RouteName';
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <RouterLink :to="{ name: RouteName.Feed }">Home Icon</RouterLink>

    <div>Logo</div>

    <a href="#">Profile Icon</a>
  </header>
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
