<template>
  <div>
    <micro-app
      name='appname-vite'
      url='http://localhost:4007/'
      inline
      disablesandbox
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
    ></micro-app>
  </div>
</template>

<script>

export default {
  name: 'vite',
  data() {
    return {
    }
  },
   methods: {
    handleCreate () {
      console.log('child-vite 创建了')
    },

    handleBeforeMount () {
      console.log('child-vite 即将被渲染')
    },

    handleMount () {
      console.log('child-vite 已经渲染完成')
    },

    handleUnmount () {
      console.log('child-vite 卸载了')
    },

    handleError () {
      console.log('child-vite 加载出错了')
    },
  }
}
</script>

<style>
</style>
