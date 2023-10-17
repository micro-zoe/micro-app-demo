import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu, MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import querystringify from 'querystringify';
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
  { key: 'react17', label: 'child-react17', icon: <AppstoreOutlined />, children: [
    { key: '/app-react17#/', label: 'home' },
    { key: '/app-react17#/child/react17/page2', label: 'page2' },
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
  const history = useHistory()
  const location = useLocation()

  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/'])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  // 👇 跟随路由更新侧边栏
  useLayoutEffect(() => {
    // 当前路由地址
    const fullPath = `${
      location.pathname.endsWith('/')
        ? location.pathname.substr(0, location.pathname.length - 1)
        : location.pathname
      }${location.hash}`
    const keys = matchSidebarItemKeys(fullPath)
    // 当前激活选项
    setSelectedKeys(keys || [])
    // 当前展开项
    setOpenKeys(keys?.slice(0, keys.length - 1) || [])
  }, [location.pathname, location.hash])

  // 👇 跟随子页面路由更新侧边栏
  useEffect(() => {
    const onHashChange = () => {
      const fullPath = window.location.hash.substring(1);
      if (fullPath.startsWith('/main-react17/')) {
        // 如果当前激活的 app 虚拟路由符合基座路由特征并且与基座路由不一致，更新基座路由
        const mainPath = fullPath.split('?')[0]
        const querystring = fullPath.substring(mainPath.length)
        const query = querystringify.parse(querystring) as Record<string, string>
        const appName = selectedKeys[0]
        const childPath = query[appName]
        if (childPath && childPath !== mainPath) {
          history.push(`${childPath.substring('/main-react17'.length)}${querystring}`)
        }
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [selectedKeys, history]);

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
    const childPath = '/main-react17' + mainPath
    // 👇 主应用切换路由
    if (currentPath !== mainPath) {
      history.push(`${mainPath}?${querystringify.stringify({ [appName]: childPath })}`)
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
