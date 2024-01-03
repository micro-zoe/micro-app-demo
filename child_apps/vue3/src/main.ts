import './public-path'
import { createApp, App as AppInstance } from 'vue'
import { createRouter, createWebHistory, Router, RouterHistory, RouterOptions } from 'vue-router'
import App from './App.vue'
import routes from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

declare global {
  interface Window {
    microApp: any
    mount: CallableFunction
    unmount: CallableFunction
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
  }
}

// 与基座进行数据交互
function handleMicroData () {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('child-vue3 getData:', window.microApp.getData())

    // 监听基座下发的数据变化
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      console.log('child-vue3 addDataListener:', data)
    })

    // 向基座发送数据
    setTimeout(() => {
      window.microApp.dispatch({ myname: 'child-vue3' })
    }, 3000)
  }
}

// ----------分割线---默认模式------两种模式任选其一-----放开注释即可运行------- //
// const router = createRouter({
//   history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/child-vue3'),
//   routes,
// })

// const app = createApp(App)
// app.use(router)
// app.mount('#vue3-app')

// console.log('微应用child-vue3渲染了')

// handleMicroData()

// // 监听卸载操作
// window.addEventListener('unmount', function () {
//   app.unmount()
//   console.log('微应用child-vue3卸载了')
// })


// ----------分割线---umd模式------两种模式任选其一-------------- //
let app: AppInstance | null = null
let router: Router | null = null
let history: RouterHistory | null = null
// 将渲染操作放入 mount 函数
window.mount = () => {
  // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  history = createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL)
  router = createRouter({
    history,
    routes,
  })

  // @ts-ignore
  app = createApp(App)
  app.use(router)
  app.use(ElementPlus)
  app.use(Antd)
  app.mount('#vue3-app')

  console.log('微应用child-vue3渲染了')

  handleMicroData()
}

// 将卸载操作放入 unmount 函数
window.unmount = () => {
  app?.unmount()
  history?.destroy()
  app = null
  router = null
  history = null
  console.log('微应用child-vue3卸载了')
}

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}

