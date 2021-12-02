import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import config from '../lib/config'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // 注册microApp
    microApp.start({
      plugins: {
        modules: {
          'appname-vite': [
            {
              loader(code: string) {
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
          // 解决create-react-app中sockjs-node报错的问题
          'appname-react16': [{
            loader(code: string) {
              if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
                code = code.replace('window.location.port', '4004')
              }
              return code
            }
          }],
          // 解决create-react-app中sockjs-node报错的问题
          'appname-react17': [{
            loader(code: string) {
              if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
                code = code.replace('window.location.port', '4005')
              }
              return code
            }
          }],
        }
      }
    })

    // 子应用sidebar通过pushState控制主应用跳转
    function pushState (appName: string, path: string, hash: string) {
      /**
       * 当子应用还未渲染，通过基座控制路由跳转，子应用在初始化时会自己根据url渲染对应的页面
       * 当子应用已经渲染，则直接控制子应用进行内部跳转
       *
       * getActiveApps: 用于获取正在运行的子应用
      */
      if (!getActiveApps().includes(appName)) {
        // child-vite 和 child-react17子应用为hash路由，这里拼接一下hash值
        hash && (path += `#${hash}`)
        // 主应用跳转
        router.push(path)
      } else {
        let childPath = null
        // child-vite 和 child-react17子应用是hash路由，hash值就是它的页面地址，这里单独处理
        if (hash) {
          childPath = hash
        } else {
          // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
          childPath = path.replace(/^\/app-[^/]+/, '')
          !childPath && (childPath = '/') // 防止地址为空
        }

        // 主应用通过下发data数据控制子应用跳转
        microApp.setData(appName, { path: childPath })
      }
    }

    // 👇 主应用向sidebar子应用下发一个名为pushState的方法
    microApp.setData('appname-sidebar', { pushState })

    /**
     * BUG FIX
     * 在next11下，子应用内部跳转，基座无法监听，导致点击浏览器前进、后退按钮，无法回退到正确的子应用页面
     * 我们通过监听popstate事件，在地址变化时重新替换为next路由来解决这个问题
     */
    window.addEventListener('popstate', () => {
      const { href, origin } = window.location
      router.replace(href.replace(origin, ''))
    })
  }, [])

  return (
    <div id='next-root'>
      <micro-app name='appname-sidebar' url={`${config.sidebar}/child/sidebar`}></micro-app>
      <div id='router-container'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
