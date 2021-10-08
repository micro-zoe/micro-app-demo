<template>
  <div>
    <div id='public-links'>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/page2">Page2</NuxtLink>
    </div>
    <div class='nuxt-page2'>
      <h3>page2</h3>
      <img src="/app-nuxtjs/micro-app-logo.png" width="100" alt="micro-app-logo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.nuxt-page2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
