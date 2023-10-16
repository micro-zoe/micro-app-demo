import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import microApp from '@micro-zoe/micro-app'
import { Menu, Submenu, MenuItem } from 'element-ui';

Vue.config.productionTip = false

microApp.start()

const router = new VueRouter({
  mode: 'history',
  // 设置主应用基础路由为main-vue2(用于后续部署)，则子应用基础路由(baseroute)为/main-vue2/xxx
  base: process.env.BASE_URL,
  routes,
})

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
