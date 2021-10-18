<template>
  <div>
    <img alt="Vue logo" :src="logo" />
    <HelloWorld msg="子应用 -- Vite+Vue@3.x" />
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
