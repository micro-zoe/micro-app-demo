import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import microApp from '@micro-zoe/micro-app'

Vue.config.productionTip = false

microApp.start({
  plugins: {
    modules: {
      vite: [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/vite\/)/g, all => {
                return all.replace('/vite/', 'http://localhost:4007/vite/')
              })
            }

            return code
          }
        }
      ],
      react16: [{
        loader(code) {
          if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
            code = code.replace('window.location.port', '4004')
          }
          return code
        }
      }],
      react17: [{
        loader(code) {
          if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
            code = code.replace('window.location.port', '4005')
          }
          return code
        }
      }],
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
