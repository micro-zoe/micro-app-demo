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
    path: '/app-angular11*',
    name: 'app-angular11',
    component: () => import(/* webpackChunkName: "angular11" */ './pages/angular11.vue'),
  },
  {
    path: '/app-nextjs*',
    name: 'app-nextjs',
    component: () => import(/* webpackChunkName: "nextjs" */ './pages/nextjs.vue'),
  },
  {
    path: '/app-nuxtjs*',
    name: 'app-nuxtjs',
    component: () => import(/* webpackChunkName: "nuxtjs" */ './pages/nuxtjs.vue'),
  },
  {
    path: '/app-react16*',
    name: 'app-react16',
    component: () => import(/* webpackChunkName: "react16" */ './pages/react16.vue'),
  },
  {
    path: '/app-react17*',
    name: 'app-react17',
    component: () => import(/* webpackChunkName: "react17" */ './pages/react17.vue'),
  },
  {
    path: '/app-vite*',
    name: 'vite',
    component: () => import(/* webpackChunkName: "vite" */ './pages/vite.vue'),
  },
  {
    path: '/app-vue2*',
    name: 'app-vue2',
    component: () => import(/* webpackChunkName: "vue2" */ './pages/vue2.vue'),
  },
  {
    path: '/app-vue3*',
    name: 'app-vue3',
    component: () => import(/* webpackChunkName: "vue3" */ './pages/vue3.vue'),
  },
];

export default routes;
