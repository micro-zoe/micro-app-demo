<template>
  <div>
    <micro-app
      v-if='url'
      name='appname-nuxtjs'
      :url='url'
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

<script lang="ts">

export default {
  name: 'nuxtjs',
  data() {
    return {
      url: null,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  mounted () {
    this.url = 'http://localhost:4003' + location.pathname
  },
  methods: {
    handleCreate (): void {
      console.log('child-nuxtjs 创建了')
    },

    handleBeforeMount (): void {
      console.log('child-nuxtjs 即将被渲染')
    },

    handleMount (): void {
      console.log('child-nuxtjs 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('child-nuxtjs 卸载了')
    },

    handleError (): void {
      console.log('child-nuxtjs 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 child-nuxtjs 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
