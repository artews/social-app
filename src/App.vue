<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<style>
@import "@/assets/base.css";

#app {
/* TODO: Set a max width here or use media queries? */
  max-width: 1007px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
