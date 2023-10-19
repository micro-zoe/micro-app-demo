import React, { useLayoutEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import microApp from '@micro-zoe/micro-app'

const sidebarItems = [
  { type: 'divider' },
  { key: '/', label: '首页', icon: <AppstoreOutlined /> },
  { type: 'divider' },
  // 👇 一级菜单 key 为子应用名称，二级菜单 key 为路由地址
  { key: 'vue2', label: 'child-vue2', icon: <AppstoreOutlined />, children: [
    { key: '/app-vue2', label: 'home' },
    { key: '/app-vue2/element-ui', label: 'element-ui' },
    { key: '/app-vue2/ant-design-vue', label: 'ant-design-vue' },
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
    { key: '/app-react16/ant-design', label: 'ant design 4.x' },
  ] },
  { key: 'react18', label: 'child-react18', icon: <AppstoreOutlined />, children: [
    { key: '/app-react18', label: 'home' },
    { key: '/app-react18/ant-design', label: 'ant design 5.x' },
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

const matchSidebarItemKeys = (key) => {
  const iter = (menus, keys) => {
    for (const menu of menus) {
      if (menu.key === key) {
        return [...keys, menu.key]
      }
      if (menu.children) {
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

  const [selectedKeys, setSelectedKeys] = useState(['/'])
  const [openKeys, setOpenKeys] = useState([])

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
    setSelectedKeys(keys)
    // 当前展开项
    setOpenKeys(keys?.slice(0, keys.length - 1))
  }, [location.pathname, location.hash])

  /**
   * 用户点击菜单时控制基座应用、子应用跳转
   * 基座控制子应用跳转分为两个步骤：1、基座跳转 2、子应用跳转
   * 基座跳转后浏览器地址改变，此时子应用并不会响应浏览器的变化，需要主动控制子应用进行内部跳转
   */
  const onClick = (e) => {
    const index = e.key
    const indexPath = [...e.keyPath].reverse()
    const currentPath = history.location.pathname

    // 获取子应用appName
    const appName = indexPath[0]
    // 主应用跳转地址
    const mainPath = indexPath[indexPath.length - 1]
    // 子应用跳转地址需要补充前缀
    const childPath = '/main-react16' + mainPath
    // 👇 主应用切换路由
    if (currentPath !== mainPath) {
      history.push(mainPath)
    }
    // 👇 子应用切换路由
    if (
      index !== '/' && // 非基座首页
      currentPath !== mainPath && // 防止重复跳转
      microApp.getActiveApps().includes(appName) // 子应用活跃状态
    ) {
      /**
       * 基座跳转后浏览器url已经改变，但子应用并不会响应，需要使用microApp.router.replace控制子应用跳转
       * TODO: 优化路由跳转方式，去除异步操作异步执行是为了确保基座跳转后再控制子应用跳转
       */
      Promise.resolve().then(() => microApp.router.replace({
        name: appName,
        path: childPath,
      }))
    }
  };

  return (
    <div id="sidebar_wrapper" style={{ width: '256px', flex: '0 0 auto' }}>
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
