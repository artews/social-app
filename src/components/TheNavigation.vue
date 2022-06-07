<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';
</script>

<template>
  <TheHeader />

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <TheFooter />
</template>

<style scoped></style>
