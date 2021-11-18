<template>
  <div>
    <div class='nuxt-page2'>
      <h1 class='nuxt-page2-title'>child-nuxtjs2-page2</h1>
      <div class="child-nuxtjs2-test-btn">test</div>
      <img :src="logoSrc" alt="micro-app-logo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      // 补全图片地址
      logoSrc: process.env.assetPrefix + '/micro-app-logo.png',
    }
  }
})
</script>

<style>
.nuxt-page2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.child-nuxtjs2-test-btn {
  height: 40px;
  width: 100px;
  background-color: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
  margin: 0 auto;
  user-select: none;
}

.nuxt-page2-title {
  font-weight: revert;
  font-size: revert;
  margin: revert;
}
</style>
