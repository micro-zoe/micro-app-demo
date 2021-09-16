import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "about" */ '../views/page2.vue')
  }
]

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes
})

export default router
