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
    path: '/app-nextjs11*',
    name: 'app-nextjs11',
    component: () => import(/* webpackChunkName: "nextjs11" */ './pages/nextjs11.vue'),
  },
  {
    path: '/app-nuxtjs2*',
    name: 'app-nuxtjs2',
    component: () => import(/* webpackChunkName: "nuxtjs2" */ './pages/nuxtjs2.vue'),
  },
  {
    path: '/app-react16*',
    name: 'app-react16',
    component: () => import(/* webpackChunkName: "react16" */ './pages/react16.vue'),
  },
  {
    // 因为主应用为history路由，appname-react17子应用是hash路由，所以不需要设置基础路由，这里正常设置
    path: '/app-react17',
    name: 'app-react17',
    component: () => import(/* webpackChunkName: "react17" */ './pages/react17.vue'),
  },
  {
    // 因为主应用为history路由，appname-vite子应用是hash路由，所以不需要设置基础路由，这里正常设置
    path: '/app-vite',
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
