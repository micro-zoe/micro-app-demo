import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navbar'

const AntDesignPage = lazy(() => import(/* webpackChunkName: "ant-design" */ './pages/ant-design/ant-design'))

// 此组件用于监听基座下发的跳转指令
const NavigatorFromBaseApp = () => {
  const history = useHistory()

  useEffect(() => {
    window.microApp?.addDataListener((data) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== history.location.pathname) {
        history.push(data.path)
      }
    })
  }, [history])

  return null
}

function App () {
  return (
    // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/child/react16'}>
      <Navbar />
      <NavigatorFromBaseApp />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ant-design">
          <Suspense fallback={<div>Loading...</div>}>
            <AntDesignPage />
          </Suspense>
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
