import React, { useLayoutEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useHistory } from 'react-router-dom';

const items = [
  {
    key: '/',
    label: 'Home',
  },
  {
    key: '/ant-design',
    label: 'Ant Design 5.x',
  },
]

const Navbar = () => {
  const history = useHistory()
  const [activeKey, setActiveKey] = useState(history.location.pathname)

  // 子应用内部跳转时，通知侧边栏改变菜单状态
  const onRouteChange = React.useCallback((key) => {
    history.push(key)
    setActiveKey(key)
    if (window.__MICRO_APP_ENVIRONMENT__) {
      /**
       * 子应用跳转后向主应用发送 PopStateEvent 事件，使主应用响应路由变化，触发侧边栏高亮
       * NOTE: 实际项目中并不一定需要，根据实际情况而定
       */
      window.rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
    }
  }, [history])

  useLayoutEffect(() => {
    setActiveKey(history.location.pathname)
  }, [history.location.pathname])

  return (
    <div id='public-links' style={{ display: 'flex', justifyContent: 'center' }}>
      <Tabs activeKey={activeKey} items={items} onChange={onRouteChange} />
    </div>
  )
}

export default Navbar;
