import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/home/home'

const AntDesignPage = lazy(() => import(/* webpackChunkName: "ant-design" */ './pages/ant-design/ant-design'))

// 此组件用于监听基座下发的跳转指令
const NavigatorFromBaseApp = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.microApp?.addDataListener((data: Record<string, unknown>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== location.pathname) {
        navigate(data.path as string)
      }
    })
  }, [navigate, location.pathname])

  return null
}

function App () {
  // 子应用内部跳转时，通知侧边栏改变菜单状态
  function onRouteChange (): void {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      /**
       * 子应用跳转后向主应用发送 PopStateEvent 事件，使主应用响应路由变化，触发侧边栏高亮
       * NOTE: 实际项目中并不一定需要，根据实际情况而定
       */
      window.rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
    }
  }

  const BASE_ROUTE = window.__MICRO_APP_BASE_ROUTE__ || '/child/react18'
  return (
    <BrowserRouter basename={BASE_ROUTE}>
      <div id='public-links' onClick={onRouteChange}>
        <Link to="/">Home</Link>&ensp;|&ensp;
        <Link to="/ant-design">Ant Design 5.x</Link>
      </div>
      <NavigatorFromBaseApp />
      <Routes>
        <Route path="/" element={(
          <Home />
        )} />
        <Route path="/ant-design" element={(
          <Suspense fallback={<div>Loading...</div>}>
            <AntDesignPage />
          </Suspense>
        )} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
