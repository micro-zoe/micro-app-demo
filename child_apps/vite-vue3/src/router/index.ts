import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/element-plus',
    name: 'element-plus',
    component: () => import(/* webpackChunkName: "element-plus" */ '../views/element-plus.vue')
  },
  {
    path: '/ant-design-vue',
    name: 'ant-design-vue',
    component: () => import(/* webpackChunkName: "ant-design-vue" */ '../views/ant-design-vue.vue'),
  },
]

export default routes
