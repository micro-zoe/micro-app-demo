<template>
  <div>
    <micro-app
      name='appname-angular11'
      :url='url'
      baseroute='/main-vue3/app-angular11'
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
import 'zone.js'
import config from '../config'

export default {
  name: 'angular11',
  data () {
    return {
      url: `${config.angular11}/child/angular11/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate (): void {
      console.log('child-angular11 创建了')
    },

    handleBeforeMount (): void {
      console.log('child-angular11 即将被渲染')
    },

    handleMount (): void {
      console.log('child-angular11 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('child-angular11 卸载了')
    },

    handleError (): void {
      console.log('child-angular11 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 child-angular11 的数据:', e.detail.data)
    },
  }
}
</script>
