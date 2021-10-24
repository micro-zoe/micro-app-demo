import './public-path'
import { createApp, App as AppInstance } from 'vue'
import { createRouter, createWebHistory, Router, RouterHistory } from 'vue-router'
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

let app: AppInstance | null = null
let router: Router | null = null
let history: RouterHistory | null = null
// 将渲染操作放入 mount 函数
function mount () {
  history = createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/')
  router = createRouter({
    history,
    routes,
  })

  app = createApp(App)
  app.use(router)
  app.mount('#vue3-app')

  console.log('微应用child-vue3渲染了')

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

