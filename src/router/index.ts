import { useAuthenticationStore } from '@/stores/authentication';
import {
  createRouter,
  createWebHistory,
  type RouteLocationRaw,
} from 'vue-router';
import TheNavigation from '../components/TheNavigation.vue';
import FeedView from '../views/FeedView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
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
    {
      path: '/register',
      name: RouteName.Register,
      component: RegisterView,
    },
  ],
});
const unauthenticatedRoutes = [RouteName.Login, RouteName.Register];

// EXPL: Global navigation guard
router.beforeEach((to) => {
  let route: boolean | RouteLocationRaw = true;
  const store = useAuthenticationStore();
  const isUnauthenticatedRoute = unauthenticatedRoutes.includes(
    to.name as RouteName
  );

  // EXPL: Unauthenticated users trying to access "authentication required" pages, redirect to login
  if (!isUnauthenticatedRoute && !store.isAuthenticated) {
    route = { name: RouteName.Login };
  } else if (isUnauthenticatedRoute && store.isAuthenticated) {
    // EXPL: Authenticated users trying to access "authentication not required" pages, redirect to feed
    route = { name: RouteName.Feed };
  }

  return route;
});

export default router;
