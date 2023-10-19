import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navbar'

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
  const BASE_ROUTE = window.__MICRO_APP_BASE_ROUTE__ || '/child/react18'
  return (
    <BrowserRouter basename={BASE_ROUTE}>
      <Navbar />
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
