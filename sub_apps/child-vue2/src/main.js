import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: window.__MICRO_APP_BASE_URL__ || '/',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#vue2-app')

