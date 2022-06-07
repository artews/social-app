<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <a v-for="index in 4" :key="index" href="#"> Icon </a>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  padding: 10px 5px;
  position: sticky;
  bottom: 0;
  background: white;
  z-index: 1;
  box-shadow: 0 -1px 5px lightgray;
}
</style>
