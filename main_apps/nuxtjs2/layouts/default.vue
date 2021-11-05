<template>
  <div id='app-root'>
    <micro-app name='appname-sidebar' url='http://localhost:4006/child-sidebar' :data='sidebarData'></micro-app>
    <div id='router-container'>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import microApp from '@micro-zoe/micro-app'

export default {
  name: 'default',
  data () {
    return {
      sidebarData: {}
    }
  },
  mounted () {
    microApp.start({
      plugins: {
        modules: {
          'appname-vite': [
            {
              loader(code) {
                if (process.env.NODE_ENV === 'development') {
                  // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
                  code = code.replace(/(from|import)(\s*['"])(\/child-vite\/)/g, all => {
                    return all.replace('/child-vite/', 'http://localhost:4007/child-vite/')
                  })
                }

                return code
              }
            }
          ],
          // 解决create-react-app中sockjs-node报错的问题
          'appname-react16': [{
            loader(code) {
              if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
                code = code.replace('window.location.port', '4004')
              }
              return code
            }
          }],
          // 解决create-react-app中sockjs-node报错的问题
          'appname-react17': [{
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

    this.sidebarData = {
      pushState: (path: string) => {
        this.$router.push(path)
      }
    }
  }
} as any
</script>

<style>
  #app-root {
    display: flex;
    text-align: center;
    padding-top: 30px;
  }

  #router-container {
    flex: 1;
  }

  #public-links {
    padding: 10px 0;
  }

  #public-links a {
    text-decoration: underline;
    color: -webkit-link;
    cursor: pointer;
  }

  #public-links a:active {
    color: #f53f3f;
  }
</style>
