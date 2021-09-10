import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/angular11*',
    name: 'angular11',
    component: () => import(/* webpackChunkName: "angular11" */ './pages/angular11.vue'),
  },
  {
    path: '/nextjs*',
    name: 'nextjs',
    component: () => import(/* webpackChunkName: "nextjs" */ './pages/nextjs.vue'),
  },
  {
    path: '/nuxtjs*',
    name: 'nuxtjs',
    component: () => import(/* webpackChunkName: "nuxtjs" */ './pages/nuxtjs.vue'),
  },
  {
    path: '/react16*',
    name: 'react16',
    component: () => import(/* webpackChunkName: "react16" */ './pages/react16.vue'),
  },
  {
    path: '/react17*',
    name: 'react17',
    component: () => import(/* webpackChunkName: "react17" */ './pages/react17.vue'),
  },
  {
    path: '/vite*',
    name: 'vite',
    component: () => import(/* webpackChunkName: "vite" */ './pages/vite.vue'),
  },
  {
    path: '/vue2*',
    name: 'vue2',
    component: () => import(/* webpackChunkName: "vue2" */ './pages/vue2.vue'),
  },
  {
    path: '/vue3*',
    name: 'vue3',
    component: () => import(/* webpackChunkName: "vue3" */ './pages/vue3.vue'),
  },
];

export default routes;
