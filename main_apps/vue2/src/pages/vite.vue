<template>
  <div>
    <micro-app
      name='appname-vite'
      :url='url'
      inline
      disablesandbox
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
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import config from '../config'

// 因为vite子应用关闭了沙箱，我们需要为子应用appname-vite创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp('appname-vite')

export default {
  name: 'vite',
  data () {
    return {
      url: `${config.vite}/child/vite/`,
      microAppData: {msg: '来自基座的数据'}
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

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-vite 卸载了')
    },

    handleError () {
      console.log('child-vite 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-vite 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
