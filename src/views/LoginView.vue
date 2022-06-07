<script setup lang="ts">
import RouteName from '@/router/RouteName';
import { useAuthenticationStore } from '@/stores/authentication';
import { useRouter } from 'vue-router';

const router = useRouter();

function authenticate() {
  const store = useAuthenticationStore();

  store.authenticate();
  router.push({ name: RouteName.Feed });
}
</script>

<template>
  <div>
    <p>The login page goes here</p>

    <button @click="authenticate">Authenticate</button>
  </div>
</template>
