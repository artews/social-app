<script setup lang="ts">
import RouteName from '@/router/RouteName';
import { useAuthenticationStore } from '@/stores/authentication';
import '@aws-amplify/ui-vue/styles.css';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const formModel = reactive({
  emailAddress: '',
  password: '',
});

function authenticate() {
  const store = useAuthenticationStore();

  store.authenticate(formModel.emailAddress, formModel.password);

  // TODO: Need to respond based on result of authentication
  // router.push({ name: RouteName.Feed });
}
</script>

<template>
  <div id="sign-in">
    <h2>Sign In</h2>

    <van-form @submit="authenticate">
      <van-field v-model="formModel.emailAddress" placeholder="Email Address" />
      <van-field v-model="formModel.password" placeholder="Password" />

      <van-button block type="primary" native-type="submit">Submit</van-button>
    </van-form>

    <router-link :to="{ name: RouteName.Register }">Sign Up</router-link>
  </div>
</template>

<style scoped>
#sign-in {
  display: flex;
  flex-direction: column;

  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 20px;
  margin: auto 20px;
}
</style>
