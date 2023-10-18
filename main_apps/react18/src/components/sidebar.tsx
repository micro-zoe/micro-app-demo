import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import microApp from '@micro-zoe/micro-app'

const sidebarItems: MenuProps['items'] = [
  { type: 'divider' },
  { key: '/', label: '首页', icon: <AppstoreOutlined /> },
  { type: 'divider' },
  // 👇 一级菜单 key 为子应用名称，二级菜单 key 为路由地址
  { key: 'vue2', label: 'child-vue2', icon: <AppstoreOutlined />, children: [
    { key: '/app-vue2', label: 'home' },
    { key: '/app-vue2/element-ui', label: 'element-ui' },
  ] },
  { key: 'vue3', label: 'child-vue3', icon: <AppstoreOutlined />, children: [
    { key: '/app-vue3', label: 'home' },
    { key: '/app-vue3/page2', label: 'page2' },
  ] },
  { key: 'vite', label: 'child-vite', icon: <AppstoreOutlined />, children: [
    { key: '/app-vite', label: 'home' },
    { key: '/app-vite#/page2', label: 'page2' },
  ] },
  { key: 'react16', label: 'child-react16', icon: <AppstoreOutlined />, children: [
    { key: '/app-react16', label: 'home' },
    { key: '/app-react16/ant-design', label: 'ant design' },
  ] },
  { key: 'react18', label: 'child-react18', icon: <AppstoreOutlined />, children: [
    { key: '/app-react18', label: 'home' },
    { key: '/app-react18/ant-design', label: 'ant design' },
  ] },
  { key: 'angular11', label: 'child-angular11', icon: <AppstoreOutlined />, children: [
    { key: '/app-angular11', label: 'home' },
    { key: '/app-angular11/page2', label: 'page2' },
  ] },
  { key: 'nextjs11', label: 'child-nextjs11', icon: <AppstoreOutlined />, children: [
    { key: '/app-nextjs11', label: 'home' },
    { key: '/app-nextjs11/page2', label: 'page2' },
  ] },
  { key: 'nuxtjs2', label: 'child-nuxtjs2', icon: <AppstoreOutlined />, children: [
    { key: '/app-nuxtjs2', label: 'home' },
    { key: '/app-nuxtjs2/page2', label: 'page2' },
  ] },
];

const matchSidebarItemKeys = (key: string) => {
  const iter = (menus: NonNullable<MenuProps['items']>, keys: string[]): string[] | undefined => {
    for (const menu of menus) {
      if (!menu) {
        continue;
      }
      if (menu.key === key) {
        return [...keys, menu.key]
      }
      if (typeof menu.key === 'string' && 'children' in menu && menu.children) {
        const res = iter(menu.children, [...keys, menu.key])
        if (res) {
          return res
        }
      }
    }
  }
  return iter(sidebarItems, [])
}


const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/'])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  // 跟随路由更新侧边栏
  useLayoutEffect(() => {
    // 当前路由地址
    const fullPath = `${
      location.pathname.endsWith('/')
        ? location.pathname.substr(0, location.pathname.length - 1)
        : location.pathname
      }${location.hash.replace(/\?.*/, '')}`
    const keys = matchSidebarItemKeys(fullPath)
    // 当前激活选项
    setSelectedKeys(keys || [])
    // 当前展开项
    setOpenKeys(keys?.slice(0, keys.length - 1) || [])
  }, [location.pathname, location.hash])

  // 跟随子应用路由跳转
  useEffect(() => {
    microApp.addGlobalDataListener((data: Record<string, unknown>) => {
      if (
        typeof data.name === 'string'
        && typeof data.routePath === 'string'
        && typeof data.routerType === 'string'
      ) {
        if (data.routerType === 'history') {
          // 主应用跳转地址需要补全前缀
          navigate(`/app-${data.name}${data.routePath}`)
        }
      }
    })
  }, [navigate])

  // 用户点击菜单时控制基座应用跳转
  const onClick: MenuProps['onClick'] = (e) => {
    const index = e.key
    const indexPath = [...e.keyPath].reverse()
    const currentPath = location.pathname

    // 获取子应用appName
    const appName = indexPath[0]
    // 主应用跳转地址
    const mainPath = indexPath[indexPath.length - 1]
    // 子应用跳转地址需要补充前缀
    const childPath = '/main-react18' + mainPath
    // 👇 主应用切换路由
    if (currentPath !== mainPath) {
      navigate(mainPath)
    }
    // 👇 子应用切换路由
    if (
      index !== '/' &&
      currentPath !== mainPath &&
      microApp.getActiveApps().includes(appName)
    ) {
      /**
       * 子应用存在，控制子应用跳转
       * 注意：
       *  1. 等到基座路由跳转结束后再控制子应用跳转
       */
      Promise.resolve().then(() => microApp.router.replace({
        name: appName,
        path: childPath,
      }))
    }
  };

  return (
    <div id="sidebar_wrapper" style={{ width: '256px' }}>
      <div id="sidebar" style={{ position: 'fixed', top: '0', left: '0', bottom: '0', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ borderRight: '1px solid #f0f0f0', margin: '0', padding: '20px 0' }}>侧边栏</h4>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
            flex: '1 1 auto',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          mode="inline"
          items={sidebarItems}
          onOpenChange={(keys) => { setOpenKeys(keys) }}
        />
      </div>
    </div>
  )
}

export default SideBar
