<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item index="/">home</el-menu-item>
      <el-menu-item index="/element-ui">element-ui</el-menu-item>
      <el-menu-item index="/ant-design-vue">ant-design-vue</el-menu-item>
    </el-menu>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

declare global {
  interface Window {
    microApp: any
    rawWindow: any,
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
  }
}

export default Vue.extend({
  data () {
    return {
      activeIndex: '',
    }
  },
  created () {
    // 初始化 activeIndex
    this.$router.onReady(() => {
      this.activeIndex = this.$route.path
    })
  },
  mounted() {
    console.log('微应用child-nuxtjs渲染了');

    // 是否是微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 主动获取基座下发的数据
      console.log('child-nuxtjs getData:', window.microApp.getData());

      // 监听基座下发的数据变化
      window.microApp.addDataListener((data: Record<string, any>) => {
        console.log('child-nuxtjs addDataListener:', data);
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
        window.rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
      }
    }
  },
  watch: {
    // 监听路由变化
    $route () {
      this.activeIndex = this.$route.path
      /**
       * 跳转后向主应用发送PopStateEvent事件，使主应用响应路由变化，触发侧边栏高亮，实际项目中并不一定需要，根据实际情况而定
       */
      if (window.__MICRO_APP_ENVIRONMENT__) {
        window.rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
      }
    }
  }
})
</script>
