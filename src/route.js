import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/components/Home.vue';
import SignUp from '@/components/Register.vue';
import Login from '@/components/Login.vue';
import Add from '@/components/Add.vue';
import Update from '@/components/Update.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
