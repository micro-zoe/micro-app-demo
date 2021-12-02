/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import config from '../../config'

const React17 = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  function handleCreate () {
    console.log('child-react17 创建了')
  }

  function handleBeforeMount () {
    console.log('child-react17 即将被渲染')
  }

  function handleMount () {
    console.log('child-react17 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('child-react17 卸载了')
  }

  function handleError () {
    console.log('child-react17 加载出错了')
  }

  function handleDataChange (e: CustomEvent) {
    console.log('来自子应用 child-react17 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        name='appname-react17'
        url={`${config.react17}/child/react17/`}
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

export default React17
