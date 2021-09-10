<template>
  <div id="app">
    <micro-app name='sidebar' url='http://localhost:4006'></micro-app>
    <router-view class='router-view' />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
body {
  margin: 0;
}
.router-view {
  flex: 1;
}
</style>
