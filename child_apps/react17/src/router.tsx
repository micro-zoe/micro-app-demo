import React, { lazy, Suspense, useEffect } from 'react'
import { HashRouter, Switch, Route, Redirect, Link, useHistory } from 'react-router-dom'
import Home from './pages/home/home'

const Page2 = lazy(() => import(/* webpackChunkName: "page2" */ './pages/page2/page2'))

// 此组件用于监听基座下发的跳转指令
const NavigatorFromBaseApp = () => {
  const history = useHistory()

  useEffect(() => {
    window.microApp?.addDataListener((data: Record<string, unknown>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== history.location.pathname) {
        history.push(data.path as string)
      }
    })
  }, [history])

  return null
}

function App () {
  // 子应用内部跳转时，通知侧边栏改变菜单状态
  function onRouteChange (): void {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 发送全局数据，通知侧边栏修改菜单展示
      window.microApp.setGlobalData({ name: window.__MICRO_APP_NAME__ })
    }
  }

  return (
    // 因为child-react17子应用是hash路由，主应用为history路由，所以不需要设置基础路由__MICRO_APP_BASE_ROUTE__
    <HashRouter>
      <div id='public-links' onClick={onRouteChange}>
        <Link to="/">Home</Link>&ensp;|&ensp;
        <Link to="/page2">Page2</Link>
      </div>
      <NavigatorFromBaseApp />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/page2">
          <Suspense fallback={<div>Loading...</div>}>
            <Page2 />
          </Suspense>
        </Route>
        <Redirect to='/' />
      </Switch>
    </HashRouter>
  )
}

export default App
