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
      // 👇 主应用向sidebar子应用下发一个名为pushState的方法
      sidebarData: {
        // 子应用sidebar 通过pushState控制主应用跳转
        pushState: (appName: string, path: string, hash: string) => {
          // vite子应用为hash路由，这里拼接一下hash值
          hash && (path += `/#${hash}`)
          // 主应用跳转
          this.$router.push(path)

          // 主应用控制其它子应用跳转 👇
          if (appName.startsWith('appname-')) { // 判断appName是否正确
            let childPath = null
            // 只有vite子应用是hash路由，hash值就是它的页面地址
            if (hash) {
              childPath = hash
            } else {
              // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
              childPath = path.replace(/^\/app-[^/]+/, '')
              !childPath && (childPath = '/') // 防止地址为空
            }
            microApp.setData(appName, { path: childPath })
          }
        },
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
