<template>
  <div>
    <h4>page2</h4>
    <div class="child-vite-vue3-test-btn">test</div>
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
.child-vite-vue3-test-btn {
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
</style>
