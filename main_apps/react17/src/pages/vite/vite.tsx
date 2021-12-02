/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import config from '../../config'

// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用appname-vite创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForAppNameVite = new EventCenterForMicroApp('appname-vite')

const Vite = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  function handleCreate () {
    console.log('child-vite 创建了')
  }

  function handleBeforeMount () {
    console.log('child-vite 即将被渲染')
  }

  function handleMount () {
    console.log('child-vite 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('child-vite 卸载了')
  }

  function handleError () {
    console.log('child-vite 加载出错了')
  }

  function handleDataChange (e: CustomEvent) {
    console.log('来自子应用 child-vite 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        name='appname-vite'
        url={`${config.vite}/child/vite/`}
        inline
        disablesandbox
        data={microAppData}
        onCreated={handleCreate}
        onBeforemount={handleBeforeMount}
        onMounted={handleMount}
        onUnmount={handleUnmount}
        onError={handleError}
        onDataChange={handleDataChange}
      ></micro-app>
    </div>
  )
}

export default Vite
