import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Todos from '@/components/Todos';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('todos');
  else next();
});

export default router;
