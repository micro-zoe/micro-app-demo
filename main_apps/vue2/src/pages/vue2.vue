<template>
  <div>
    <!-- loading 容器 -->
    <div class='loading-container'></div>
    <micro-app
      name='vue2'
      :url='url'
      router-mode='search'
      baseroute='/main-vue2/app-vue2'
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
import { Loading } from 'element-ui'
import config from '../config'

export default {
  name: 'vue2',
  data () {
    return {
      url: `${config.vue2}/child/vue2/`,
      microAppData: {msg: '来自基座的数据'},
    }
  },
  created() {
  },
  mounted() {
    // 加载loading
    this.loadingInstance = Loading.service({
      target: '.loading-container',
      fullscreen: true,
      background: 'hsla(0,0%,100%, .9)',
    })
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

      // 关闭 loading
      this.loadingInstance.close()

      // 向子应用发送数据
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
.loading-container {
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
