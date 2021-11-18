import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import microApp from '@micro-zoe/micro-app'

const SideBar = () => {
  const history = useHistory()

  // 子应用sidebar 通过pushState控制主应用跳转
  function pushState (appName: string, path: string, hash: string) {
    // vite子应用为hash路由，这里拼接一下hash值
    hash && (path += `/#${hash}`)
    // 主应用跳转
    history.push(path)

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
    // 👇 主应用向sidebar子应用下发一个名为pushState的方法
    microApp.setData('appname-sidebar', { pushState })
  })

  return <micro-app name='appname-sidebar' url='http://localhost:4006/child-sidebar'></micro-app>
}

export default SideBar
