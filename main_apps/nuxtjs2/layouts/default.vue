<template>
  <div id='app-root'>
    <SideBar />
    <div id='router-container'>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import microApp from '@micro-zoe/micro-app'

export default {
  name: 'default',
  mounted () {
    microApp.start()
  }
}
</script>

<style>
  #app-root {
    display: flex;
    text-align: center;
    padding-top: 30px;
  }

  #router-container {
    flex: 1;
  }
</style>
