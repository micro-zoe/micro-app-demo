import './public-path'
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

let app = null
// 将渲染操作放入 mount 函数
function mount () {
  app = new Vue({
    router,
    render: h => h(App),
  }).$mount('#vue2-app')

  console.log('微应用child-vue2渲染了')

  // 主动获取数据
  console.log('child-vue2 getData:', window.microApp?.getData())

  // 监听数据变化
  window.microApp?.addDataListener((data) => {
    console.log('child-vue2 addDataListener:', data)
  })
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app.$destroy()
  app = null
  console.log('微应用child-vue2卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}
