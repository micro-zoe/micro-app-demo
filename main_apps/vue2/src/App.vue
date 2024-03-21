<template>
  <div id="app">
    <SideBar />
    <router-view id='router-container' />
    <!-- <router-view id='router-container' v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component
            :is="Component"
            :key="route.fullPath"
          />
        </keep-alive>
      </transition>
    </router-view> -->
    <!-- <router-view id='router-container' :key="$route.fullPath"></router-view> -->
  </div>
</template>

<script>
import SideBar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
  },
  mounted () {
    console.log(this.$route)
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
}

#router-container {
  flex: 1;
  position: relative;
}
</style>
