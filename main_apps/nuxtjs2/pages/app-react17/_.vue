<template>
  <div>
    <micro-app
      v-if='show'
      name='appname-react17'
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
import config from '../../lib/config'

export default {
  name: 'react17',
  data () {
    return {
      show: false,
      url: `${config.react17}/child/react17/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    handleCreate (): void {
      console.log('child-react17 创建了')
    },

    handleBeforeMount (): void {
      console.log('child-react17 即将被渲染')
    },

    handleMount (): void {
      console.log('child-react17 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('child-react17 卸载了')
    },

    handleError (): void {
      console.log('child-react17 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 child-react17 的数据:', e.detail.data)
    },
  }
} as any
</script>

<style>
</style>
