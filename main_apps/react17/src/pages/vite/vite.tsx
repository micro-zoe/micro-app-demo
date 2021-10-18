/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

const Vite = () => {
  function handleCreate () {
    console.log('child-vite 创建了')
  }

  function handleBeforeMount () {
    console.log('child-vite 即将被渲染')
  }

  function handleMount () {
    console.log('child-vite 已经渲染完成')
  }

  function handleUnmount () {
    console.log('child-vite 卸载了')
  }

  function handleError () {
    console.log('child-vite 加载出错了')
  }

  return (
    <div>
      <micro-app
        name='appname-vite'
        url='http://localhost:4007/'
        inline
        disablesandbox
        onCreated={handleCreate}
        onBeforemount={handleBeforeMount}
        onMounted={handleMount}
        onUnmount={handleUnmount}
        onError={handleError}
      ></micro-app>
    </div>
  )
}

export default Vite
