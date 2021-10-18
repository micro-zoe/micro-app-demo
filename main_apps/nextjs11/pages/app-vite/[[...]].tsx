/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

const Vite: NextPage = () => {
  const [show, changeShow] = useState(false)

  function handleBeforeMount (): void {
    console.log('child-vite 即将被渲染')
  }

  function handleMount (): void {
    console.log('child-vite 已经渲染完成')
  }

  function handleUnmount (): void {
    console.log('child-vite 卸载了')
  }

  function handleError (): void {
    console.log('child-vite 加载出错了')
  }

  useEffect(() => {
    changeShow(true)
  }, [])

  return (
    <div>
      {
        show && (
          <micro-app
            name='appname-vite'
            url='http://localhost:4007/'
            inline
            disablesandbox
            onBeforemount={handleBeforeMount}
            onMounted={handleMount}
            onUnmount={handleUnmount}
            onError={handleError}
          ></micro-app>
        )
      }
    </div>
  )
}

export default Vite
