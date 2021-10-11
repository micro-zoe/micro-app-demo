import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import microApp from '@micro-zoe/micro-app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  function pushState (path: string) {
    router.push(path)
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
                  code = code.replace(/(from|import)(\s*['"])(\/app-vite\/)/g, all => {
                    return all.replace('/app-vite/', 'http://localhost:4007/app-vite/')
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
    microApp.setData('appname-sidebar', { pushState })
  }, [])

  return (
    <div id='next-root'>
      <micro-app name='appname-sidebar' url='http://localhost:4006'></micro-app>
      <div id='router-container'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
