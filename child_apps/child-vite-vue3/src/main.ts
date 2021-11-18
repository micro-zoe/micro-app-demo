import { createApp, App as AppInstance } from 'vue'
import { createRouter, createWebHashHistory, RouterHistory, Router } from 'vue-router'
import App from './App.vue'
import routes from './router'

// createApp(App).use(router).mount('#vite-app')

declare global {
  interface Window {
    eventCenterForAppNameVite: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_APPLICATION__: string
  }
}

// 与基座进行数据交互
function handleMicroData (router: Router) {
  // eventCenterForAppNameVite 是基座添加到window的数据通信对象
  if (window.eventCenterForAppNameVite) {
    // 主动获取基座下发的数据
    console.log('child-vite getData:', window.eventCenterForAppNameVite.getData())

    // 监听基座下发的数据变化
    window.eventCenterForAppNameVite.addDataListener((data: Record<string, unknown>) => {
      console.log('child-vite addDataListener:', data)

      if (data.path && typeof data.path === 'string') {
        data.path = data.path.replace(/^#/, '')
        // 当基座下发path时进行跳转
        if (data.path && data.path !== router.currentRoute.value.path) {
          // 因为vue-router在pathname相同的情况下依然会将路由推入堆栈，所以这里使用了replace，以防止点击两次浏览器返回按钮才能正确返回的问题。
          router.replace(data.path as string)
        }
      }
    })

    // 向基座发送数据
    setTimeout(() => {
      window.eventCenterForAppNameVite.dispatch({ myname: 'child-vite' })
    }, 3000)
  }
}

// ----------分割线---默认模式------两种模式任选其一-----放开注释即可运行------- //
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// })

// const app = createApp(App)
// app.use(router)
// app.mount('#vite-app')

// console.log('微应用child-vite渲染了')

// handleMicroData(router)

// // 监听卸载操作
// window.addEventListener("unmount", function () {
//   app.unmount()
//   // 卸载所有数据监听函数
//   window.eventCenterForAppNameVite?.clearDataListener()
//   console.log('微应用child-vite卸载了')
// })



// ----------分割线---umd模式------两种模式任选其一-------------- //
let app: AppInstance | null = null
let router: Router | null = null
let history: RouterHistory | null = null
// 将渲染操作放入 mount 函数
function mount () {
  history = createWebHashHistory()
  router = createRouter({
    history,
    routes,
  })

  app = createApp(App)
  app.use(router)
  app.mount('#vite-app')

  console.log('微应用child-vite渲染了')

  handleMicroData(router)
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app?.unmount()
  history?.destroy()
  // 卸载所有数据监听函数
  window.eventCenterForAppNameVite?.clearDataListener()
  app = null
  router = null
  history = null
  console.log('微应用child-vite卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_BASE_APPLICATION__) {
  // @ts-ignore
  window['micro-app-appname-vite'] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}

