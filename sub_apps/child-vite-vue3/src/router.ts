import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from './views/home.vue'

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
    path: '/page2/:page*',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (page2.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page2" */ './views/page2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
