<template>
  <div id="sidebar-app">
    <h4>侧边栏</h4>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      @select="select"
    >
      <el-menu-item index="/">
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 菜单(el-submenu) index为子应用名称，子菜单(el-menu-item) index为路由地址 -->
      <el-submenu index="vue2">
        <template slot="title">
          <span class='submenu-text'>child-vue2</span>
        </template>
        <el-menu-item index="/app-vue2">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-vue2/page2?query=123">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="vue3">
        <template slot="title">
          <span class='submenu-text'>child-vue3</span>
        </template>
        <el-menu-item index="/app-vue3">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-vue3/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="vite">
        <template slot="title">
          <span class='submenu-text'>child-vite</span>
        </template>
        <el-menu-item index="/app-vite">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-vite#/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="react16">
        <template slot="title">
          <span class='submenu-text'>child-react16</span>
        </template>
        <el-menu-item index="/app-react16">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-react16/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="react17">
        <template slot="title">
          <span class='submenu-text'>child-react17</span>
        </template>
        <el-menu-item index="/app-react17">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-react17/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="angular11">
        <template slot="title">
          <span class='submenu-text'>child-angular11</span>
        </template>
        <el-menu-item index="/app-angular11">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-angular11/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="nextjs11">
        <template slot="title">
          <span class='submenu-text'>child-nextjs11</span>
        </template>
        <el-menu-item index="/app-nextjs11">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-nextjs11/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="nuxtjs2">
        <template slot="title">
          <span class='submenu-text'>child-nuxtjs2</span>
        </template>
        <el-menu-item index="/app-nuxtjs2">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-nuxtjs2/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

// 每一个基座路由地址对应的子应用的地址
const routeSheet = {
  // 子应用vue2
  '/app-vue2': '/child/vue2/',
  '/app-vue2/page2?query=123': '/child/vue2/page2',
  // 子应用vue3
  '/app-vue3': '/child/vue3/',
  '/app-vue3/page2': '/child/vue3/page2',
  // 子应用vite (hash路由)
  '/app-vite': '/',
  '/app-vite#/page2': '/page2',
  // 子应用react16
  '/app-react16': '/child/react16/',
  '/app-react16/page2': '/child/react16/page2',
  // 子应用react17 (hash路由)
  '/app-react17': '/child/react17/#/',
  '/app-react17/page2': '/child/react17#/page2',
  // 子应用angular11
  '/app-angular11': '/child/angular11/',
  '/app-angular11/page2': '/child/angular11/page2',
  // 子应用next.js
  '/app-nextjs11': '/',
  '/app-nextjs11/page2': '/page2',
  // 子应用nuxt.js
  '/app-nuxtjs2': '/nuxtjs2/',
  '/app-nuxtjs2/page2': '/nuxtjs2/page2',
}

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/', // 当前激活菜单的 index
    }
  },
  created () {
    this.getActiveIndex()

    // 监听浏览器前进后退按钮，激活对应菜单
    window.addEventListener('popstate', () => this.getActiveIndex())

    // 判断微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 获取基座下发的数据
      this.microAppData = window.microApp.getData()

      // 全局数据监听，监听来自其它子应用页面跳转，控制侧边栏的菜单展示
      // 因为子应用之间无法直接通信，这里采用全局数据通信
      window.microApp.addGlobalDataListener((data) => {
        console.log('全局数据:', data)
        this.getActiveIndex()
      })
    }
  },
  methods: {
    // 根据url地址获取选中菜单
    getActiveIndex () {
      // location.pathname的值通常为：/main-angular11/app-vue2/page2?query=123，我们只取`/app-vue2/page2?query=123`
      const pathArr = location.pathname.match(/\/app-.+/)
      this.activeIndex = pathArr ? pathArr[0].replace(/\/$/, '') : '/'

      let hash = ''
      if (location.hash) {
        hash = location.hash.split('?')[0]
      }
      // 兼容 child-vite 和 child-react17 子应用，因为它们是hash路由
      if (
        (this.activeIndex === '/app-vite' || this.activeIndex === '/app-react17') &&
        hash.includes('page2')
      ) {
        this.activeIndex += hash.replace(/^#/, '')
      }

      // 去除斜线后缀，如：/app-vue2/ 转换为 /app-vue2
      if (this.activeIndex !== '/') {
        this.activeIndex = this.activeIndex.replace(/\/$/, '')
      }

      return this.activeIndex
    },
    // 用户点击菜单时控制基座应用跳转
    select (index, indexPath) {
      if (window.__MICRO_APP_ENVIRONMENT__) {
        // 获取子应用appName
        const appName = indexPath[0]

        // 重置元素绑定，防止基座跳转报错
        window.microApp.removeDomScope()

        // 控制基座跳转页面，并渲染子应用
        this.microAppData.pushState(appName, index, routeSheet[index])
      }
    },
  }
}
</script>

<style>
#sidebar-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: inline-block;
  margin-right: 40px;
  border-right: 1px solid rgb(230, 230, 230);
}

h4 {
  font-weight: revert;
}

.el-menu-item {
  font-size: 16px;
}

.el-menu {
  width: 200px;
  border-right: none;
}

.submenu-text {
  font-size: 16px;
  user-select: none;
}

.menu-item-text {
  font-size: 14px;
  user-select: none;
}
</style>
