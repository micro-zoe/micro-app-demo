import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import config from '../config'

const SideBar = () => {
  const history = useHistory()

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
      hash && (path += `/#${hash}`)
      // 主应用跳转
      history.push(path)
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

  useEffect(() => {
    // 👇 主应用向sidebar子应用下发一个名为pushState的方法
    microApp.setData('appname-sidebar', { pushState })
  })

  return <micro-app name='appname-sidebar' url={`${config.sidebar}/child/sidebar/`}></micro-app>
}

export default SideBar
