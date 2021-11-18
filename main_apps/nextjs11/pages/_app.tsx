import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import microApp from '@micro-zoe/micro-app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // 子应用sidebar 通过pushState控制主应用跳转
  function pushState (appName: string, path: string, hash: string) {
    // vite子应用为hash路由，这里拼接一下hash值
    hash && (path += `#${hash}`)
    // 主应用跳转
    router.push(path)

    // 主应用控制其它子应用跳转 👇
    if (appName.startsWith('appname-')) { // 判断appName是否正确
      let childPath = null
      // 只有vite子应用是hash路由，hash值就是它的页面地址
      if (hash) {
        childPath = hash
      } else {
        // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
        childPath = path.replace(/^\/app-[^/]+/, '')
        !childPath && (childPath = '/') // 防止地址为空
      }
      microApp.setData(appName, { path: childPath })
    }
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
    // 👇 主应用向sidebar子应用下发一个名为pushState的方法
    microApp.setData('appname-sidebar', { pushState })
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
