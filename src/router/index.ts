import { createRouter, createWebHistory } from 'vue-router';
import FeedView from '../views/FeedView.vue';
import LoginView from '../views/LoginView.vue';
import TheNavigation from '../components/TheNavigation.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheNavigation,
      children: [
        {
          path: '',
          name: 'feed',
          component: FeedView,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

export default router;
