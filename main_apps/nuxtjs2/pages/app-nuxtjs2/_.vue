<template>
  <div>
    <micro-app
      v-if='show'
      name='appname-nuxtjs2'
      :url='url'
      ssr
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
import config from '../../lib/config'

export default {
  name: 'nuxtjs2',
  data () {
    return {
      show: false,
      url: `${config.nuxtjs2}/app-nuxtjs2`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    handleCreate (): void {
      console.log('child-nuxtjs2 创建了')
    },

    handleBeforeMount (): void {
      console.log('child-nuxtjs2 即将被渲染')
    },

    handleMount (): void {
      console.log('child-nuxtjs2 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('child-nuxtjs2 卸载了')
    },

    handleError (): void {
      console.log('child-nuxtjs2 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 child-nuxtjs2 的数据:', e.detail.data)
    },
  }
} as any
</script>

<style>
</style>
