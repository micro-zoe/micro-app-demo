/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import config from '../../config'

const Nuxtjs2 = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  function handleCreate () {
    console.log('child-nuxjs 创建了')
  }

  function handleBeforeMount () {
    console.log('child-nuxjs 即将被渲染')
  }

  function handleMount () {
    console.log('child-nuxjs 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('child-nuxjs 卸载了')
  }

  function handleError () {
    console.log('child-nuxjs 加载出错了')
  }

  function handleDataChange (e: CustomEvent) {
    console.log('来自子应用 child-nuxjs 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        name='appname-nuxtjs2'
        url={`${config.nuxtjs2}/main-react17/app-nuxtjs2`}
        ssr
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

export default Nuxtjs2
