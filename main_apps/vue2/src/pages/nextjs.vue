<template>
  <div>
    <micro-app
      name='appname-nextjs'
      :url='url'
      disableScopecss
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
  name: 'nextjs',
  data () {
    return {
      url: config.nextjs + location.pathname,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-nextjs 创建了')
    },

    handleBeforeMount () {
      console.log('child-nextjs 即将被渲染')
    },

    handleMount () {
      console.log('child-nextjs 已经渲染完成')

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-nextjs 卸载了')
    },

    handleError () {
      console.log('child-nextjs 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-nextjs 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
