<template>
  <div>
    <micro-app
      name='appname-angular11'
      url='http://localhost:4001/'
      baseroute='/app-angular11'
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
import 'zone.js'

export default {
  name: 'angular11',
  data() {
    return {
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-angular11 创建了')
    },

    handleBeforeMount () {
      console.log('child-angular11 即将被渲染')
    },

    handleMount () {
      console.log('child-angular11 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-angular11 卸载了')
    },

    handleError () {
      console.log('child-angular11 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-angular11 的数据:', e.detail.data)
    },
  }
}
</script>
