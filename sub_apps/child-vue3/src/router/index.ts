import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/react17/*',
  //   name: 'React17',
  //   component: React17
  // },
  {
    path: '/about/:page*',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(window.__MICRO_APP_BASE_URL__ || process.env.BASE_URL),
  routes
})

export default router
