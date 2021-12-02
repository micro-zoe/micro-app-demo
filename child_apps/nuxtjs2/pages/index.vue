<template>
  <div>
    <h1>Welcome to Nuxtjs</h1>
    <img :src='logoSrc' alt="nuxtjs-logo" width="200" />
    <h2 class='home-title2'>chilld-nuxtjs2 首页</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      // 补全图片地址
      logoSrc: process.env.assetPrefix + '/nuxtjs-logo.jpeg',
    }
  }
})
</script>

<style>
.home-title2 {
  color: rgb(69, 109, 244);
}
</style>

