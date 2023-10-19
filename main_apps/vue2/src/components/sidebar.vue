<template>
  <div id="sidebar">
    <h3 :abc="activeIndex">侧边栏</h3>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/">
        <span slot="title" class='submenu-text'>首页</span>
      </el-menu-item>
      <!-- 菜单(el-submenu) index为子应用名称，子菜单(el-menu-item) index为路由地址 -->
      <el-submenu index="vue2">
        <template slot="title">
          <span class='submenu-text'>child-vue2</span>
        </template>
        <el-menu-item index="/app-vue2">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-vue2/element-ui">
          <span class='menu-item-text'>element-ui</span>
        </el-menu-item>
        <el-menu-item index="/app-vue2/ant-design-vue">
          <span class='menu-item-text'>ant-design-vue</span>
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
        <el-menu-item index="/app-react16/ant-design">
          <span class='menu-item-text'>ant-design</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="react18">
        <template slot="title">
          <span class='submenu-text'>child-react18</span>
        </template>
        <el-menu-item index="/app-react18">
          <span class='menu-item-text'>home</span>
        </el-menu-item>
        <el-menu-item index="/app-react18/ant-design">
          <span class='menu-item-text'>ant-design</span>
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
      <el-submenu index="nuxtjs2">/
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
import microApp from '@micro-zoe/micro-app'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/', // 当前激活菜单的 index
    }
  },
  created () {
    this.$router.onReady(() => {
      this.activeIndex = this.$route.path
    })
  },
  methods: {
    /**
     * 基座控制子应用跳转分为两个步骤：1、基座跳转 2、子应用跳转
     * 基座跳转后浏览器地址改变，此时子应用并不会响应浏览器的变化，需要主动控制子应用进行内部跳转
     */
    handleSelect (index, indexPath) {
      const appName = indexPath[0] // 获取子应用appName
      const childPath = '/main-vue2' + indexPath[1] // 子应用跳转地址为：基座前缀 + 跳转地址
      if (
        index !== '/' && // 非基座首页
        this.$route.path !== indexPath[1] && // 防止重复跳转
        microApp.getActiveApps().includes(appName) // 子应用活跃状态
      ) {
        /**
         * 基座跳转后浏览器url已经改变，但子应用并不会响应，需要使用microApp.router.replace控制子应用跳转
         * TODO: 优化路由跳转方式，去除异步操作
         */
        Promise.resolve().then(() => microApp.router.replace({
          name: appName,
          path: childPath,
        }))
      }
    },
  },
  watch: {
    $route () {
      this.activeIndex = this.$route.path.replace(/\/$/ui, '')
    }
  }
}
</script>

<style>
#sidebar {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: inline-block;
  margin-right: 40px;
  border-right: 1px solid rgb(230, 230, 230);
}

#sidebar h4 {
  font-weight: revert;
}

#sidebar .el-menu-item {
  font-size: 16px;
}

#sidebar .el-menu {
  width: 200px;
  border-right: none;
}

#sidebar .submenu-text {
  font-size: 16px;
  font-weight: 500;
  user-select: none;
  color: #303133;
  font-family: "Helvetica Neue", tahoma, Arial, Verdana, "Microsoft YaHei", "宋体", sans-serif;
}

#sidebar .menu-item-text {
  font-size: 14px;
  user-select: none;
}
</style>
