<template>
  <div>
    <img alt="Vue logo" :src="logo" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
const logo = new URL('../assets/logo.png', import.meta.url)

export default defineComponent({
  name: 'Home',
  data () {
    return {
      logo,
    }
  },
  components: {
    HelloWorld
  }
} as any)
</script>

<style>

</style>
