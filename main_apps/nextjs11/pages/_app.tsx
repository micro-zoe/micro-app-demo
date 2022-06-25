import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import config from '../lib/config'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()


  useEffect(() => {
  // @ts-ignore
  window.router = router
    // 注册microApp
    microApp.start({
      plugins: {
        modules: {
          'vite': [
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
        }
      }
    })

    // 子应用sidebar通过pushState控制主应用跳转
    function pushState (appName: string, parentPath: string, childPath: string) {
      console.log(1111111, appName, parentPath, childPath, router)
      /**
       * ******************************** 注意！********************************
       * 这里展示了如何通过基座的侧边栏控制子应用渲染指定的页面
       * 案例中嵌入了 vue2、vue3、react、vite、angular、next.js、nuxt.js 等多种子应用
       * 其中vite和next.js的跳转方式与其它子应用不同，所以单独处理
       * **********************************************************************
       */
      // 首页没有子应用，执行正常跳转即可
      if (appName === '/') {
        router.push('/')
      } else if (appName === 'vite') {
        // this.handleVite(appName, parentPath, childPath)
      } else {
        /**
         * 基座地址变化或者子应用地址变化，执行跳转操作
         * microApp.router.current: 用于获取当前子应用的路由信息
         */
        if (
          location.pathname !== parentPath || // 基座地址变化
          // @ts-ignore
          microApp.router.current.get(appName).fullPath !== childPath // 子应用地址变化
        ) {
          let afterJump = Promise.resolve(true)
          let type = 'replace'
          if (location.pathname !== parentPath) {
            afterJump = router.push(parentPath) // 基座跳转后，使用 microApp.router.replace 控制子应用跳转
          } else {
            type = 'push' // 基座地址不变，子应用地址变化，使用 microApp.router.push 控制子应用跳转
          }

          // 判断子应用是否存在
          if (getActiveApps().includes(appName)) {
            afterJump.then(() => {
              // 子应用存在，控制子应用跳转
              console.log(444444, window.location.href)
              // @ts-ignore
              microApp.router[type]({
                name: appName,
                path: childPath,
              })
            })
          } else {
            // 子应用不存在，设置defaultPage，控制子应用初次渲染时的默认页面
            // @ts-ignore
            microApp.router.setDefaultPage(appName, childPath)
          }
        }
      }
    }

    // 👇 主应用向sidebar子应用下发一个名为pushState的方法
    microApp.setData('sidebar', { pushState })

    /**
     * BUG FIX
     * 在next11下，子应用内部跳转，基座无法监听，导致点击浏览器前进、后退按钮，无法回退到正确的子应用页面
     * 我们通过监听popstate事件，在地址变化时重新替换为next路由来解决这个问题
     */
    // window.addEventListener('popstate', () => {
    //   const { href, origin } = window.location
    //   router.replace(href.replace(origin, ''))
    // })
  }, [])

  return (
    <div id='next-root'>
      <micro-app name='sidebar' url={`${config.sidebar}/child/sidebar`} disable-memory-router></micro-app>
      <div id='router-container'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
