<template>
  <div id="vue2-app">
    <div id='public-links' @click="onRouteChange">
      <router-link to="/">Home</router-link> |
      <router-link to="/page2">Page2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // 子应用内部跳转时，通知侧边栏改变菜单状态
    onRouteChange () {
      if (window.__MICRO_APP_ENVIRONMENT__) {
        // 发送全局数据，通知侧边栏修改菜单展示
        window.microApp.setGlobalData({ name: window.__MICRO_APP_NAME__ })
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
  text-align: center;
  color: #2c3e50;
}
</style>
