import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import microApp from '@micro-zoe/micro-app'

const SideBar = () => {
  const history = useHistory()

  function pushState (path) {
    history.push(path)
  }

  useEffect(() => {
    // 👇 基座向子应用下发一个名为pushState的方法
    microApp.setData('appname-sidebar', { pushState })
  })

  return <micro-app name='appname-sidebar' url='http://localhost:4006'></micro-app>
}

export default SideBar
