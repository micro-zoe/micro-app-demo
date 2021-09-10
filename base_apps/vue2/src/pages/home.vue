<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue@{{version}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Vue from 'vue'
import { removeDomScope } from '@micro-zoe/micro-app'

export default {
  name: 'page1',
  data () {
    return {
      version: Vue.version,
      showapp: true,
      data: {},
    }
  },
  created() {
    // 跳转首页时，是先渲染首页，后删除子应用，所以可能导致基座应用的DOM绑定到正在运行子应用，我们在页面渲染前手动解绑DOM
    removeDomScope()
  },
  components: {
    HelloWorld
  },
}
</script>

<style>

</style>
