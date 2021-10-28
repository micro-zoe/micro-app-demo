/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

const Nuxtjs: NextPage = () => {
  const [url, changeUrl] = useState('')
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})
  const [show, changeShow] = useState(false)

  function handleCreate (): void {
    console.log('child-nuxtjs 创建了')
  }

  function handleBeforeMount (): void {
    console.log('child-nuxtjs 即将被渲染')
  }

  function handleMount (): void {
    console.log('child-nuxtjs 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount (): void {
    console.log('child-nuxtjs 卸载了')
  }

  function handleError (): void {
    console.log('child-nuxtjs 加载出错了')
  }

  function handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-nuxtjs 的数据:', e.detail.data)
  }

  useEffect(() => {
    changeUrl('http://localhost:4003' + location.pathname)
    changeShow(true)
  }, [])

  return (
    <div>
      {
        show && (
          <micro-app
            name='appname-nuxtjs'
            url={url}
            inline
            data={microAppData}
            onCreated={handleCreate}
            onBeforemount={handleBeforeMount}
            onMounted={handleMount}
            onUnmount={handleUnmount}
            onError={handleError}
            onDataChange={handleDataChange}
          ></micro-app>
        )
      }
    </div>
  )
}

export default Nuxtjs
