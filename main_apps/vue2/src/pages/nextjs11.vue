<template>
  <div>
    <micro-app
      name='appname-nextjs11'
      :url='url'
      ssr
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
  name: 'nextjs11',
  data () {
    return {
      url: `${config.nextjs11}/main-vue2/app-nextjs11`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-nextjs11 创建了')
    },

    handleBeforeMount () {
      console.log('child-nextjs11 即将被渲染')
    },

    handleMount () {
      console.log('child-nextjs11 已经渲染完成')

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-nextjs11 卸载了')
    },

    handleError () {
      console.log('child-nextjs11 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-nextjs11 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
