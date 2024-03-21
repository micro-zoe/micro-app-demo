<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="'主应用 -- Vue@'+version"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, version } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  data () {
    return {
      version,
    }
  },
  components: {
    HelloWorld
  },
})
</script>
