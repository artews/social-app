import { useAuthenticationStore } from '@/stores/authentication';
import {
  createRouter,
  createWebHistory,
  type RouteLocationRaw,
} from 'vue-router';
import TheNavigation from '../components/TheNavigation.vue';
import FeedView from '../views/FeedView.vue';
import LoginView from '../views/LoginView.vue';
import RouteName from './RouteName';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheNavigation,
      children: [
        {
          path: '',
          name: RouteName.Feed,
          component: FeedView,
        },
      ],
    },
    {
      path: '/login',
      name: RouteName.Login,
      component: LoginView,
    },
  ],
});

// EXPL: Global navigation guard
router.beforeEach((to) => {
  let route: boolean | RouteLocationRaw = true;
  const store = useAuthenticationStore();

  // EXPL: Unauthenticated users trying to access non-login page, redirect to login
  if (to.name !== RouteName.Login && !store.isAuthenticated) {
    route = { name: RouteName.Login };
  } else if (to.name === RouteName.Login && store.isAuthenticated) {
    // EXPL: Authenticated users trying to access login page, redirect to feed
    route = { name: RouteName.Feed };
  }

  return route;
});

export default router;
