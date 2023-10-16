<template>
  <div id="vue2-app">
    <div id='public-links'>
      <router-link to="/">Home</router-link> |
      <router-link to="/element-ui">ElementUI</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#vue2-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
