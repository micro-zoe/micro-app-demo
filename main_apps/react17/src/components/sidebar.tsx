import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import microApp from '@micro-zoe/micro-app'

const SideBar = () => {
  const history = useHistory()

    // 子应用控制基座页面跳转
    function pushState (path: string, hash: string) {
      // vite子应用为hash路由，这里拼接一下hash值
      hash && (path += `/#${hash}`)
      history.push(path)
    }

    // 基座控制子应用页面跳转
    function jumpChildPage (appName: string, path: string) {
      // 下发通知到子应用
      microApp.setData(appName, { path })
    }

  useEffect(() => {
    // 👇 基座向子应用下发一个名为pushState的方法
    microApp.setData('appname-sidebar', { pushState, jumpChildPage })
  })

  return <micro-app name='appname-sidebar' url='http://localhost:4006/child-sidebar'></micro-app>
}

export default SideBar
