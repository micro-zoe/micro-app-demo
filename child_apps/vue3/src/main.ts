import './public-path'
import { createApp, App as AppInstance } from 'vue'
import { createRouter, createWebHistory, Router, RouterHistory, RouterOptions } from 'vue-router'
import App from './App.vue'
import routes from './router'

declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
  }
}

// 与基座进行数据交互
function handleMicroData (router: Router) {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('child-vue3 getData:', window.microApp.getData())

    // 监听基座下发的数据变化
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      console.log('child-vue3 addDataListener:', data)

      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push(data.path as string)
      }
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

// handleMicroData(router)

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
function mount () {
  // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  history = createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL)
  router = createRouter({
    history,
    routes,
  }) as Router

  // @ts-ignore
  app = createApp(App)
  app.use(router)
  app.mount('#vue3-app')

  console.log('微应用child-vue3渲染了')

  handleMicroData(router)
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app?.unmount()
  history?.destroy()
  app = null
  router = null
  history = null
  console.log('微应用child-vue3卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  // @ts-ignore
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}

