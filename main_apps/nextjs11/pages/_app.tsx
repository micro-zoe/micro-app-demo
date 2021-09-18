import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  function pushState (path: string) {
    router.push(path)
  }

  useEffect(() => {
    const microApp = require('@micro-zoe/micro-app').default
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
          'appname-react16': [{
            loader(code: string) {
              if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
                code = code.replace('window.location.port', '4004')
              }
              return code
            }
          }],
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
      <div className='router-container'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
