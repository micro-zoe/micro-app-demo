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
    path: '/element-ui',
    name: 'element-ui',
    component: () => import(/* webpackChunkName: "element-ui" */ './pages/element-ui.vue'),
  },
];

export default routes;
