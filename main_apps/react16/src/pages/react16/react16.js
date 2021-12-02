/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import config from '../../config'

const React16 = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  function handleCreate () {
    console.log('child-react16 创建了')
  }

  function handleBeforeMount () {
    console.log('child-react16 即将被渲染')
  }

  function handleMount () {
    console.log('child-react16 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('child-react16 卸载了')
  }

  function handleError () {
    console.log('child-react16 加载出错了')
  }

  function handleDataChange (e) {
    console.log('来自子应用 child-react16 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        name='appname-react16'
        url={`${config.react16}/child/react16/`}
        baseroute='/main-react16/app-react16'
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

export default React16
