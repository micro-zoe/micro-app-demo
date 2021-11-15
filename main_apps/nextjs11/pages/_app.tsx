import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import microApp from '@micro-zoe/micro-app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // 子应用控制基座页面跳转
  function pushState (path: string, hash?: string) {
    // vite子应用为hash路由，这里拼接一下hash值
    hash && (path += `#${hash}`)
    router.push(path)
  }

  // 基座控制子应用页面跳转
  function jumpChildPage (appName: string, path: string) {
    // 下发通知到子应用
    microApp.setData(appName, { path })
  }

  useEffect(() => {
    microApp.start({
      plugins: {
        modules: {
          'appname-vite': [
            {
              loader(code: string) {
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
    // 👇 基座向sidebar子应用下发一个名为pushState的方法
    microApp.setData('appname-sidebar', { pushState, jumpChildPage })
  }, [])

  return (
    <div id='next-root'>
      <micro-app name='appname-sidebar' url='http://localhost:4006/child-sidebar'></micro-app>
      <div id='router-container'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
