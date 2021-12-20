/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import config from '../../config'

const Nextjs11 = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  function handleCreate () {
    console.log('child-nexjs 创建了')
  }

  function handleBeforeMount () {
    console.log('child-nexjs 即将被渲染')
  }

  function handleMount () {
    console.log('child-nexjs 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('child-nexjs 卸载了')
  }

  function handleError () {
    console.log('child-nexjs 加载出错了')
  }

  function handleDataChange (e: CustomEvent) {
    console.log('来自子应用 child-nexjs 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        name='appname-nextjs11'
        url={`${config.nextjs11}/main-react17/app-nextjs11`}
        ssr
        disableScopecss
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

export default Nextjs11
