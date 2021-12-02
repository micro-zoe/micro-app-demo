<template>
  <div>
    <micro-app
      name='appname-vue3'
      :url='url'
      baseroute='/main-vue2/app-vue3'
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
  name: 'vue3',
  data () {
    return {
      url: `${config.vue3}/child/vue3/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-vue3 创建了')
    },

    handleBeforeMount () {
      console.log('child-vue3 即将被渲染')
    },

    handleMount () {
      console.log('child-vue3 已经渲染完成')

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-vue3 卸载了')
    },

    handleError () {
      console.log('child-vue3 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-vue3 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
