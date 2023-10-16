import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app-angular11/:page*',
    name: 'app-angular11',
    component: () => import(/* webpackChunkName: "angular11" */ '../views/angular11.vue'),
  },
  {
    path: '/app-nextjs11/:page*',
    name: 'app-nextjs11',
    component: () => import(/* webpackChunkName: "nextjs11" */ '../views/nextjs11.vue'),
  },
  {
    path: '/app-nuxtjs2/:page*',
    name: 'app-nuxtjs2',
    component: () => import(/* webpackChunkName: "nuxtjs2" */ '../views/nuxtjs2.vue'),
  },
  {
    path: '/app-react16/:page*',
    name: 'app-react16',
    component: () => import(/* webpackChunkName: "react16" */ '../views/react16.vue'),
  },
  {
    path: '/app-react17/:page*',
    name: 'app-react17',
    component: () => import(/* webpackChunkName: "react17" */ '../views/react17.vue'),
  },
  {
    path: '/app-vite/:page*',
    name: 'vite',
    component: () => import(/* webpackChunkName: "vite" */ '../views/vite.vue'),
  },
  {
    path: '/app-vue2/:page*',
    name: 'app-vue2',
    component: () => import(/* webpackChunkName: "vue2" */ '../views/vue2.vue'),
  },
  {
    path: '/app-vue3/:page*',
    name: 'app-vue3',
    component: () => import(/* webpackChunkName: "vue3" */ '../views/vue3.vue'),
  },
  // {
  //   path: '/app-vue3/page2',
  //   name: 'app-vue3/page2',
  //   component: () => import(/* webpackChunkName: "vue3" */ '../views/vue3.vue'),
  // },
  // {
  //   path: '/app-vue3',
  //   name: 'app-vue3',
  //   component: () => import(/* webpackChunkName: "vue3" */ '../views/vue3.vue'),
  // },
]

const router = createRouter({
  // 设置主应用基础路由为main-vue3(用于后续部署)，则子应用基础路由(baseroute)为/main-vue3/xxx
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
