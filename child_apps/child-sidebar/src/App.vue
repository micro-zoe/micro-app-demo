<template>
  <div id="sidebar-app">
    <h4>导航</h4>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultIndex"
      @select="select"
    >
      <el-menu-item index="/">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="appname-vue2">
        <template slot="title">
          <span class='submenu-text'>child-vue2</span>
        </template>
        <el-menu-item index="app-vue2">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-vue2/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-vue3">
        <template slot="title">
          <span class='submenu-text'>child-vue3</span>
        </template>
        <el-menu-item index="app-vue3">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-vue3/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <!-- vite是hash路由，处理方式略微不同 -->
      <el-submenu index="appname-vite">
        <template slot="title">
          <span class='submenu-text'>child-vite</span>
        </template>
        <el-menu-item index="app-vite">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-vite/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-react16">
        <template slot="title">
          <span class='submenu-text'>child-react16</span>
        </template>
        <el-menu-item index="app-react16">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-react16/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-react17">
        <template slot="title">
          <span class='submenu-text'>child-react17</span>
        </template>
        <el-menu-item index="app-react17">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-react17/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-angular11">
        <template slot="title">
          <span class='submenu-text'>child-angular11</span>
        </template>
        <el-menu-item index="app-angular11">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-angular11/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-nextjs">
        <template slot="title">
          <span class='submenu-text'>child-nextjs</span>
        </template>
        <el-menu-item index="app-nextjs">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-nextjs/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="appname-nuxtjs">
        <template slot="title">
          <span class='submenu-text'>child-nuxtjs</span>
        </template>
        <el-menu-item index="app-nuxtjs">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="app-nuxtjs/page2">
          <span class='menu-item-text'>page2</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      defaultIndex: '/', // 当前激活菜单的 index
      activeApp: null, // 正在运行的app
    }
  },
  created () {
    // location.pathname的值通常为：/main-angular11/app-vue2/page2，我们只取`app-vue2/page2`
    const pathArr = location.pathname.match(/app-.+[^\/$]/)
    this.defaultIndex = pathArr ? pathArr[0] : '/'

    // 兼容vite子应用，只有它是hash路由
    if (this.defaultIndex === 'app-vite' && location.hash.includes('page2')) {
      this.defaultIndex += location.hash.replace(/^#/, '').replace(/\/$/, '')
    }

    // 获取基座下发的数据
    this.microAppData = window.microApp && window.microApp.getData()

  },
  methods: {
    select (index, indexPath) {
      if (this.microAppData) {
        // 获取跳转的路由地址，如：app-vue2 转换为 /app-vue2/
        let fullPath = `/${index}/`.replaceAll(/\/{2,}/g, '/')

        // 因为只有vite子应用是hash路由，所以需要传递hash值
        let hash = null
        if (fullPath === '/app-vite/page2/') {
          fullPath = '/app-vite'
          hash = '/page2'
        }

        // 获取子应用appName
        const appName = indexPath[0]

        // 控制基座跳转页面，并渲染子应用
        this.microAppData.pushState(appName, fullPath, hash)
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
