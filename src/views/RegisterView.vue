<script setup lang="ts">
import RouteName from '@/router/RouteName';
import '@aws-amplify/ui-vue/styles.css';
import { Auth } from 'aws-amplify';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const formModel = reactive({
  emailAddress: '',
  password: '',
  confirmPassword: '',
});

async function register() {
  try {
    const { user, userConfirmed } = await Auth.signUp({
      username: formModel.emailAddress,
      password: formModel.password,
      attributes: {
        email: formModel.emailAddress,
      },
    });

    console.log('[REGISTER]', { user, userConfirmed });

    // TODO: Upon success, show message and redirect to login page
    if (userConfirmed) {
      router.push({ name: RouteName.Login });
    }
  } catch (error) {
    console.error('[REGISTER]', { error });
  }
}
</script>

<template>
  <div id="sign-up">
    <h2>Sign Up</h2>

    <van-form @submit="register">
      <van-field v-model="formModel.emailAddress" placeholder="Email Address" />
      <van-field v-model="formModel.password" placeholder="Password" />
      <van-field
        v-model="formModel.confirmPassword"
        placeholder="Confirm Password"
      />

      <van-button block type="primary" native-type="submit">Submit</van-button>
    </van-form>

    <router-link :to="{ name: RouteName.Login }">
      Nevermind, I already have an account
    </router-link>
  </div>
</template>

<style scoped>
#sign-up {
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px;
}
</style>
