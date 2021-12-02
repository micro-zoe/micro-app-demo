<template>
  <div>
    <micro-app
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

<script>
import config from '../config'

export default {
  name: 'react17',
  data () {
    return {
      url: `${config.react17}/child/react17/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-react17 创建了')
    },

    handleBeforeMount () {
      console.log('child-react17 即将被渲染')
    },

    handleMount () {
      console.log('child-react17 已经渲染完成')

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-react17 卸载了')
    },

    handleError () {
      console.log('child-react17 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-react17 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
