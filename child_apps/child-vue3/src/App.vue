<template>
  <div id=vue3-app>
    <div id='public-links'>
      <router-link to="/">Home</router-link> | <router-link to="/page2">Page2</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#vue3-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
