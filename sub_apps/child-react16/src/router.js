import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home/home'

const Page2 = lazy(() => import(/* webpackChunkName: "page2" */ './pages/page2/page2'))

function App () {
  return (
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
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
    </BrowserRouter>
  )
}

export default App
