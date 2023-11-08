<template>
  <div>
    <!-- loading 容器 -->
    <div class='loading-container'></div>
    <micro-app
      name='vue3'
      :url='url'
      router-mode='custom'
      baseroute='/main-vue3/app-vue3'
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
import { ElLoading as Loading } from 'element-plus'
import config from '../config'

export default {
  name: 'vue3',
  data () {
    return {
      url: `${config.vue3}/child/vue3/`,
      microAppData: {msg: '来自基座的数据'},
    }
  },
  created() {
  },
  mounted() {
    // 加载loading
    // @ts-ignore
    this.loadingInstance = Loading.service({
      target: '.loading-container',
      fullscreen: true,
      background: 'hsla(0,0%,100%, .9)',
    })
  },
  methods: {
    handleCreate (): void {
      console.log('child-vue3 创建了')
    },

    handleBeforeMount (): void {
      console.log('child-vue3 即将被渲染')
    },

    handleMount (): void {
      console.log('child-vue3 已经渲染完成')

      // 关闭 loading
      // @ts-ignore
      this.loadingInstance.close()

      // 向子应用发送数据
      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('child-vue3 卸载了')
    },

    handleError (): void {
      console.log('child-vue3 加载出错了')
    },

    handleDataChange (e:CustomEvent): void {
      console.log('来自子应用 child-vue3 的数据:', e.detail.data)
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
