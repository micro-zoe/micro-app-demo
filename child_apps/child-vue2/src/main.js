import "./public-path"
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: window.__MICRO_APP_BASE_ROUTE__ || '/',
  routes,
})

let app

window[`micro-app-${window.__MICRO_APP_NAME__ || ''}`] = {
  mount () {
    console.log("微应用child-vue2渲染了");
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#vue2-app')
  },
  unmount () {
    console.log("微应用child-vue2卸载了");
    // 卸载应用
    app.$destroy()
  }
}

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__ || ''}`].mount()
}
