<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    console.log('微应用child-nuxtjs渲染了');

    // 是否是微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 主动获取基座下发的数据
      console.log('child-nuxtjs getData:', window.microApp.getData());

      // 监听基座下发的数据变化
      window.microApp.addDataListener((data: Record<string, any>) => {
        console.log('child-nuxtjs addDataListener:', data);
      })

      // 向基座发送数据
      setTimeout(() => {
        window.microApp.dispatch({ myname: 'child-nuxtjs' });
      }, 3000)

      // 监听卸载事件
      window.addEventListener('unmount', () => {
        console.log('微应用child-nuxtjs卸载了');
      })
    }
  }
})
</script>
