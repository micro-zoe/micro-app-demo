<template>
  <div>
    <micro-app
      name='react18'
      :url='url'
      router-mode='custom'
      baseroute='/main-vue2/app-react18'
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
import config from '../config'

export default {
  name: 'react18',
  data () {
    return {
      url: `${config.react18}/child/react18/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-react18 创建了')
    },

    handleBeforeMount () {
      console.log('child-react18 即将被渲染')
    },

    handleMount () {
      console.log('child-react18 已经渲染完成')

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-react18 卸载了')
    },

    handleError () {
      console.log('child-react18 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-react18 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
