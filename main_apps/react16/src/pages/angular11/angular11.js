/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useState } from 'react'
import 'zone.js'
import config from '../../config'

const Angular11 = () => {
  const [microAppData, changeMicroAppData] = useState({msg: '来自基座的数据'})

  // zone.js冲突，created无法触发
  function handleCreate () {
    console.log('child-angular11 创建了')
  }

  function handleBeforeMount () {
    console.log('child-angular11 即将被渲染')
  }

  function handleMount () {
    console.log('child-angular11 已经渲染完成')

    setTimeout(() => {
      changeMicroAppData({msg: '来自基座的新数据'})
    }, 2000)
  }

  function handleUnmount () {
    console.log('child-angular11 卸载了')
  }

  function handleError () {
    console.log('child-angular11 加载出错了')
  }

  function handleDataChange (e) {
    console.log('来自子应用 child-angular11 的数据:', e.detail.data)
  }

  return (
    <div>
      <micro-app
        name='appname-angular11'
        url={`${config.angular11}/child/angular11/`}
        baseroute='/main-react16/app-angular11'
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

export default Angular11
