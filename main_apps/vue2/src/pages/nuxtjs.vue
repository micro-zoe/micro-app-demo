<template>
  <div>
    <micro-app name='appname-nuxtjs' :url='url' inline></micro-app>
  </div>
</template>

<script>

export default {
  name: 'nuxtjs',
  data() {
    return {
      url: 'http://localhost:4003' + location.pathname
    }
  },
}
</script>

<style>
</style>
