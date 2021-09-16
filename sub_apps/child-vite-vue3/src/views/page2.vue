<template>
  <div>
    <h4>page2</h4>
    <img :src="microAppLogo" alt="micro-app-logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const microAppLogo = new URL('../assets/micro-app-logo.png', import.meta.url)

export default defineComponent({
  name: 'Page2',
  data () {
    return {
      microAppLogo,
    }
  },
} as any)
</script>

<style>
</style>
