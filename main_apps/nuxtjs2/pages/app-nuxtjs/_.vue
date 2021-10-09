<template>
  <div>
    <micro-app name='appname-nuxtjs' :url='url'></micro-app>
  </div>
</template>

<script>

export default {
  name: 'nuxtjs',
  data() {
    return {
      url: 'http://localhost:4003'
    }
  },
  mounted () {
    this.url = this.url + location.pathname
  }
}
</script>

<style>
</style>
