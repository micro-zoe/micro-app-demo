import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/page1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/react17/'
  },
  {
    path: '/react17/*',
    name: 'react17',
    component: Home,
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "page2" */ './pages/page2.vue'),
  },
];

export default routes;
