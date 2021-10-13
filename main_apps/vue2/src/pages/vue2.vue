<template>
  <div>
    <micro-app
      name='appname-vue2'
      url='http://localhost:4008/'
      baseroute='/app-vue2'
      @created='handleCreate'
      @mounted='handleMount'
      @unmount='handleUnMount'
      inline
    ></micro-app>
  </div>
</template>

<script>

export default {
  name: 'vue2',
  methods: {
    handleCreate () {
      // console.log('child-vue2 创建了')
    },
    handleMount () {
      // console.log('child-vue2 渲染了')
    },
    handleUnMount () {
      // console.log('child-vue2 卸载了')
    }
  }
}
</script>

<style>
</style>
