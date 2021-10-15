import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
  }
}

let app: any = null
// 将渲染操作放入 mount 函数
function mount () {
  app = createApp(App)
  app.use(router)
  app.mount('#vue3-app')

  console.log('微应用child-vue3渲染了')

  // 主动获取数据
  console.log('child-vue3 getData:', window.microApp?.getData())

  // 监听数据
  window.microApp?.addDataListener((data: Record<string, unknown>) => {
    console.log('child-vue3 addDataListener:', data)
  })
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app.unmount()
  app = null
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

