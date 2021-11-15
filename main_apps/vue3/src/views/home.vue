<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="主应用 - Vue@3.x + TypeScript"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
