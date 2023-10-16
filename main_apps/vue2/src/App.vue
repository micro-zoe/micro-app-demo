<template>
  <div id="app">
    <SideBar />
    <router-view id='router-container' />
  </div>
</template>

<script>
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import config from './config'
import SideBar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
  },
  data () {
    return {
      url: `${config.sidebar}/child/sidebar/`,
      // 👇 主应用向子应用sidebar下发一个名为pushState的方法
      sidebarData: {
        /**
         * 基座控制子应用跳转的方法
         * @param appName 子应用name
         * @param parentPath 基座的跳转地址
         * @param childPath 子应用的跳转地址
         */
        pushState: (appName, parentPath, childPath) => {
          console.log(1111111, appName, parentPath, childPath, this.$route, microApp.router.current)
          /**
           * ******************************** 注意！********************************
           * 这里展示了如何通过基座的侧边栏控制子应用渲染指定的页面
           * 案例中有 vue2、vue3、react、vite、angular、next.js、nuxt.js 等多种子应用
           * 其中vite和next.js的跳转方式与其它子应用不同，需要单独处理
           * **********************************************************************
           */
          // 首页没有子应用，执行正常跳转即可
          if (appName === '/') {
            this.handleHome()
          } else if (appName === 'vite' || appName === 'nextjs11') {
            this.handleViteAndNextjs(appName, parentPath, childPath)
          } else {
            /**
             * 基座地址变化或者子应用地址变化，执行跳转操作
             * microApp.router.current: 用于获取子应用的路由信息
             */
            if (
              this.$route.path !== parentPath || // 基座地址变化
              microApp.router.current.get(appName).fullPath !== childPath // 子应用地址变化
            ) {
              let type = 'replace'
              if (this.$route.path !== parentPath) {
                this.$router.push(parentPath) // 基座地址变化，使用 microApp.router.replace 控制子应用跳转
              } else {
                type = 'push' // 基座地址不变，子应用地址变化，使用 microApp.router.push 控制子应用跳转
              }

              // 判断子应用是否存在
              if (getActiveApps().includes(appName)) {
                // 子应用存在，控制子应用跳转
                microApp.router[type]({
                  name: appName,
                  path: childPath,
                })
              } else {
                // 子应用不存在，设置defaultPage，控制子应用初次渲染时的默认页面
                microApp.router.setDefaultPage(appName, childPath)
              }
            }
          }
        },
      }
    }
  },
  mounted () {
    window.router = this.$router
  },
  methods: {
    handleHome () {
      if (this.$route.path !== '/') this.$router.push('/')
    },
    handleViteAndNextjs (appName, parentPath, childPath) {
      /**
       * 当子应用还未渲染，子应用在初始化时会自己根据url渲染对应的页面
       * 当子应用已经渲染，则直接通知子应用进行内部跳转
       */
      // getActiveApps: 用于获取正在运行的子应用
      if (getActiveApps().includes(appName)) {
        // 子应用存在，则通过下发data数据通知子应用跳转
        microApp.setData(appName, { path: childPath })
      } else {
        if (appName === 'nextjs11') {
          // 子应用不存在，设置defaultPage，控制子应用初次渲染时的默认页面
          microApp.router.setDefaultPage(appName, '/nextjs11' + childPath)
        }
        // 主应用跳转
        this.$router.push(parentPath)
      }
    },
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
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
