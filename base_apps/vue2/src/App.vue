<template>
  <div id="app">
    <micro-app name='appname-sidebar' url='http://localhost:4006' :data='sidebarData'></micro-app>
    <router-view class='router-container' />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sidebarData: {
        pushState: (path) => {
          this.$router.push(path)
        }
      }
    }
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

.router-container {
  flex: 1;
}

#public-links {
  padding: 10px 0;
}

#public-links a {
  text-decoration: underline;
  color: -webkit-link;
  cursor: pointer;
}

#public-links a:active {
  color: #f53f3f;
}
</style>
