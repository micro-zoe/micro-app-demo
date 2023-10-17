<template>
  <div id="app">
    <SideBar />
    <router-view id='router-container' />
  </div>
</template>

<script>
import SideBar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    SideBar,
  },
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
  position: relative;
}
</style>
