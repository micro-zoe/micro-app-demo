import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const items: TabsProps['items'] = [
  {
    key: '/',
    label: 'Home',
  },
  {
    key: '/ant-design',
    label: 'Ant Design 5.x',
  },
]

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // 子应用内部跳转时，通知侧边栏改变菜单状态
  const onRouteChange = React.useCallback<NonNullable<TabsProps['onChange']>>((key) => {
    navigate(key)
    if (window.__MICRO_APP_ENVIRONMENT__) {
      /**
       * 子应用跳转后向主应用发送 PopStateEvent 事件，使主应用响应路由变化，触发侧边栏高亮
       * NOTE: 实际项目中并不一定需要，根据实际情况而定
       */
      window.rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
    }
  }, [navigate])

  return (
    <div id='public-links' style={{ display: 'flex', justifyContent: 'center' }}>
      <Tabs defaultActiveKey={location.pathname} items={items} onChange={onRouteChange} />
    </div>
  )
}

export default Navbar;
