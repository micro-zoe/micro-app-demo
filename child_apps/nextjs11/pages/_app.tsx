import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import '../styles/globals.css'

declare global {
  interface Window {
    microApp: any
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_NAME__: string
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // 子应用内部跳转时，通知侧边栏改变菜单状态
  function onRouteChange (e: any): void {
    if (window.__MICRO_APP_ENVIRONMENT__) {
     // 发送全局数据，通知侧边栏修改菜单展示
     window.microApp.setGlobalData({ name: window.__MICRO_APP_NAME__ })
    }
  }

  useEffect(() => {
    console.log('微应用child-nextjs渲染了');


    // 是否是微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 主动获取基座下发的数据
      console.log('child-nextjs getData:', window.microApp.getData());

      // 监听基座下发的数据变化
      window.microApp.addDataListener((data: Record<string, unknown>) => {
        console.log('child-nextjs addDataListener:', data);

        // 当基座下发path时进行跳转
        if (data.path) {
          router.push(data.path as string)
        }
      })

      // 向基座发送数据
      setTimeout(() => {
        window.microApp.dispatch({ myname: 'child-nextjs' });
      }, 3000)

      // 监听卸载事件
      window.addEventListener('unmount', () => {
        console.log('微应用child-nextjs卸载了');
      })
    }
  }, [])

  return (
    <div>
      <div id='public-links' onClick={onRouteChange}>
        <Link href="/"><a>Home</a></Link>&ensp;|&ensp;
        <Link href="/page2"><a>Page2</a></Link>
      </div>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp


