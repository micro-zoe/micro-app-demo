<template>
  <div id="sidebar">
    <h4>侧边栏</h4>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      :router='true'
      @select="handleSelect"
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
        <el-menu-item index="/app-vue2/element-ui">
          <span class='menu-item-text'>element-ui</span>
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
  methods: {
    // 用户点击菜单时控制基座应用跳转
    handleSelect (index, indexPath) {
      // 获取子应用appName
      const appName = indexPath[0]
      // 子应用跳转地址需要补充前缀
      const childPath = '/main-vue2' + indexPath[1]

      if (
        index !== '/' &&
        this.$route.path !== indexPath[1] &&
        microApp.getActiveApps().includes(appName)
      ) {
        /**
         * 子应用存在，控制子应用跳转
         * 注意：
         *  1. 等到基座路由跳转结束后再控制子应用跳转
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
      this.activeIndex = this.$route.path
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
