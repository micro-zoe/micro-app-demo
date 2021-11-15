<template>
  <div id="app-container">
    <micro-app name='appname-sidebar' url='http://localhost:4006/child-sidebar' :data='sidebarData'></micro-app>
    <router-view id='router-container' />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import microApp from '@micro-zoe/micro-app'

export default defineComponent({
  name: 'App',
  data () {
    return {
      sidebarData: {
        // 子应用控制基座页面跳转
        pushState: (path: string, hash?: string) => {
          // vite子应用为hash路由，这里拼接一下hash值
          hash && (path += `/#${hash}`)
          this.$router.push(path)
        },
        // 基座控制子应用页面跳转
        jumpChildPage: (appName: string, path: string) => {
          // 下发通知到子应用
          microApp.setData(appName, { path })
        }
      },
    }
  },
} as any)
</script>

<style>
#app-container {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  text-align: center;
}

#router-container {
  flex: 1;
}

#public-links {
  padding: 10px 0;
}

#public-links a {
  text-decoration: underline;
  color: -webkit-link;
  cursor: pointer;
}

#public-links a:active {
  color: #f53f3f;
}
</style>
