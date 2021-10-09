<template>
  <div>
    <micro-app name='appname-nextjs' :url='url'></micro-app>
  </div>
</template>

<script>

export default {
  name: 'nextjs',
  data() {
    return {
      url: 'http://localhost:4002'
    }
  },
  mounted () {
    this.url = this.url + location.pathname
  }
}
</script>

<style>
</style>
