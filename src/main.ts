import { Amplify } from 'aws-amplify';
import { createPinia } from 'pinia';
import { Button, Field, Form } from 'vant';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-west-2:08bd2971-5ab0-4930-bff2-454a93587999',
    userPoolId: 'us-west-2_j1cWb695r',
    region: 'us-west-2',
    userPoolWebClientId: '41letb3kakc353d8p0poolk98s',
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
// Vant components
app.use(Button);
app.use(Field);
app.use(Form);

app.mount('#app');
