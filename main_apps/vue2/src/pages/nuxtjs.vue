<template>
  <div>
    <micro-app
      name='appname-nuxtjs'
      :url='url'
      inline
      :data='microAppData'
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
    ></micro-app>
  </div>
</template>

<script>

export default {
  name: 'nuxtjs',
  data() {
    return {
      url: 'http://localhost:4003' + location.pathname,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-nuxtjs 创建了')
    },

    handleBeforeMount () {
      console.log('child-nuxtjs 即将被渲染')
    },

    handleMount () {
      console.log('child-nuxtjs 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-nuxtjs 卸载了')
    },

    handleError () {
      console.log('child-nuxtjs 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-nuxtjs 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
