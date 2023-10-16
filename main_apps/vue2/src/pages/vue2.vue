<template>
  <div>
    <micro-app
      name='vue2'
      :url='url'
      router-mode='custom'
      baseroute='/main-vue2/app-vue2'
    ></micro-app>
  </div>
</template>

<script>
import config from '../config'

export default {
  name: 'vue2',
  data () {
    return {
      url: `${config.vue2}/child/vue2/`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('child-vue2 创建了')
    },

    handleBeforeMount () {
      console.log('child-vue2 即将被渲染')
    },

    handleMount () {
      console.log('child-vue2 已经渲染完成')

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('child-vue2 卸载了')
    },

    handleError () {
      console.log('child-vue2 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 child-vue2 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
