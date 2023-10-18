import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link, useHistory } from 'react-router-dom'
import Home from './pages/home/home'

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
  // 子应用内部跳转时，通知侧边栏改变菜单状态
  function onRouteChange () {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      /**
       * 子应用跳转后向主应用发送 PopStateEvent 事件，使主应用响应路由变化，触发侧边栏高亮
       * NOTE: 实际项目中并不一定需要，根据实际情况而定
       */
      window.rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
    }
  }

  return (
    // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/child/react16'}>
      <div id='public-links' onClick={onRouteChange}>
        <Link to="/">Home</Link>&ensp;|&ensp;
        <Link to="/ant-design">And Design</Link>
      </div>
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
