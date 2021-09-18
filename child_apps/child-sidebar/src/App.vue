<template>
  <div id="sidebar-app">
    <h4>导航</h4>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active='defaultIndex'
      @select='select'
    >
      <el-menu-item index="/">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="app-vue2">
        <span slot="title">child-vue2</span>
      </el-menu-item>
      <el-menu-item index="app-vue3">
        <span slot="title">child-vue3</span>
      </el-menu-item>
      <el-menu-item index="app-vite">
        <span slot="title">child-vite</span>
      </el-menu-item>
      <el-menu-item index="app-react16">
        <span slot="title">child-react16</span>
      </el-menu-item>
      <el-menu-item index="app-react17">
        <span slot="title">child-react17</span>
      </el-menu-item>
      <el-menu-item index="app-angular11">
        <span slot="title">child-angular11</span>
      </el-menu-item>
      <el-menu-item index="app-nextjs">
        <span slot="title">child-nextjs</span>
      </el-menu-item>
      <el-menu-item index="app-nuxtjs">
        <span slot="title">child-nuxtjs</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      defaultIndex: '/'
    }
  },
  created () {
    const pathArr = location.pathname.split('/')
    this.defaultIndex = pathArr[1] ? pathArr[1] : '/'
  },
  methods: {
    select (index) {
      const path = `/${index}`.replaceAll(/\/{2,}/g, '/')
      if (window.microApp) {
        const data = window.microApp.getData()
        data && data.pushState(path)
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
}

.el-menu-item {
  font-size: 16px;
}
.el-menu {
  width: 150px;
}
</style>
