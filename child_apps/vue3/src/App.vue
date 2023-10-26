<template>
  <div id=vue3-app>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item index="/">home</el-menu-item>
        <el-menu-item index="/element-plus-1">element-plus 1.x</el-menu-item>
        <el-menu-item index="/ant-design-vue-4">ant-design-vue 4.x</el-menu-item>
      </el-menu>
    </div>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/',
    }
  },
  created () {
    // 初始化 activeIndex
    this.$router.isReady().then(() => {
      this.activeIndex = this.$route.path
    })
  },
  watch: {
    // 监听路由变化
    $route () {
      
      /**
       * 跳转后向主应用发送PopStateEvent事件，使主应用响应路由变化，触发侧边栏高亮，实际项目中并不一定需要，根据实际情况而定
       */
      if(this.activeIndex === this.$route.path) {return;}
      this.activeIndex = this.$route.path
      
      if (window.__MICRO_APP_ENVIRONMENT__) {
        window.rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
      }
    }
  }
}
</script>

<style lang="scss">
#vue3-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
