<template>
  <div>
    <div id='public-links' @click="onRouteChange">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/page2">Page2</NuxtLink>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
  }
}

export default Vue.extend({
  mounted() {
    console.log('微应用child-nuxtjs渲染了');

    // 是否是微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 主动获取基座下发的数据
      console.log('child-nuxtjs getData:', window.microApp.getData());

      // 监听基座下发的数据变化
      window.microApp.addDataListener((data: Record<string, any>) => {
        console.log('child-nuxtjs addDataListener:', data);

        // 当基座下发path时进行跳转
        if (data.path && data.path !== this.$router.currentRoute.path) {
          this.$router.push(data.path as string)
        }
      })

      // 向基座发送数据
      setTimeout(() => {
        window.microApp.dispatch({ myname: 'child-nuxtjs' });
      }, 3000)

      // 监听卸载事件
      window.addEventListener('unmount', () => {
        console.log('微应用child-nuxtjs卸载了');
      })
    }
  },
  methods: {
    // 子应用内部跳转时，通知侧边栏改变菜单状态
    onRouteChange (): void {
      if (window.__MICRO_APP_ENVIRONMENT__) {
        // 发送全局数据，通知侧边栏修改菜单展示
        window.microApp.setGlobalData({ name: window.__MICRO_APP_NAME__ })
      }
    }
  }
})
</script>
