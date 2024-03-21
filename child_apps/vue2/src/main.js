import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Antd)

const router = new VueRouter({
  mode: 'history',
  // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes,
})

/**
 * 与基座进行数据交互
 * TODO: 其它子应用也应该修改
 */
if (window.__MICRO_APP_ENVIRONMENT__) {
  // 主动获取基座下发的数据
  console.log('child-vue2 getData:', window.microApp.getData())

  // 监听基座下发的数据变化
  window.microApp.addDataListener((data) => {
    console.log('child-vue2 addDataListener:', data)
  })

  // 向基座发送数据
  setTimeout(() => {
    window.microApp.dispatch({ myname: 'child-vue2' })
  }, 3000)
}

// ----------分割线---默认模式------两种模式任选其一-----放开注释即可运行------- //
// const app = new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#vue2-app')

// console.log('微应用child-vue2渲染了')

// // 监听卸载操作
// window.addEventListener('unmount', function () {
//   app.$destroy()
//   console.log('微应用child-vue2卸载了')
// })

// ----------分割线---umd模式------两种模式任选其一-------------- //
let app = null
// 将渲染操作放入 mount 函数
function mount () {
  app = new Vue({
    router,
    render: h => h(App),
  }).$mount('#vue2-app')

  console.log('微应用child-vue2渲染了')
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app.$destroy()
  app.$el.innerHTML = ''
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

window.addEventListener('popstate', (e) => {
  console.log('子应用vue2监听的 popstate', e)
})
