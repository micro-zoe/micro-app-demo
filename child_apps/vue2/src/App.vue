<template>
  <div id="vue2-app">
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
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
}
</script>

<style>
#vue2-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 50px;
}

.el-menu-demo {
  display: block;
}
</style>
