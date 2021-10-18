<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>子应用 -- Vue@{{version}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Vue from 'vue'

export default {
  name: 'page1',
  data () {
    return {
      version: Vue.version,
    }
  },
  components: {
    HelloWorld
  },
}
</script>

<style>

</style>
