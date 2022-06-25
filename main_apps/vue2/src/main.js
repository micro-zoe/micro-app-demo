import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import microApp from '@micro-zoe/micro-app'

Vue.config.productionTip = false

microApp.start({
  plugins: {
    modules: {
      'vite': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
                return all.replace('/child/vite/', 'http://localhost:4007/child/vite/')
              })
            }

            return code
          }
        }
      ],
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  // 设置主应用基础路由为main-vue2(用于后续部署)，则子应用基础路由(baseroute)为/main-vue2/xxx
  base: process.env.BASE_URL,
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
