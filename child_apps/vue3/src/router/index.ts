import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/element-plus-1',
    name: 'element-plus 1.x',
    component: () => import(/* webpackChunkName: "element-plus-1" */ '../views/element-plus-1.vue')
  },
  {
    path: '/ant-design-vue-4',
    name: 'ant-design-vue 4.x',
    component: () => import(/* webpackChunkName: "ant-design-vue" */ '../views/ant-design-vue-4.vue'),
  },
]

export default routes
