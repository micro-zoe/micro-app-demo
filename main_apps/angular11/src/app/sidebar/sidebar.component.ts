import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NavigationEnd, Router } from '@angular/router';
import microApp from '@micro-zoe/micro-app';

interface SidebarItem {
  name?: string;
  key?: string;
  type?: string;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  { key: '/', name: '首页' },
  // 👇 一级菜单 key 为子应用名称，二级菜单 key 为路由地址
  { key: 'vue2', name: 'child-vue2', children: [
    { key: '/app-vue2', name: 'home' },
    { key: '/app-vue2/element-ui', name: 'element-ui' },
    { key: '/app-vue2/ant-design-vue', name: 'ant-design-vue' },
  ] },
  { key: 'vue3', name: 'child-vue3', children: [
    { key: '/app-vue3', name: 'home' },
    { key: '/app-vue3/page2', name: 'page2' },
  ] },
  { key: 'vite', name: 'child-vite', children: [
    { key: '/app-vite', name: 'home' },
    { key: '/app-vite#/page2', name: 'page2' },
  ] },
  { key: 'react16', name: 'child-react16', children: [
    { key: '/app-react16', name: 'home' },
    { key: '/app-react16/ant-design', name: 'ant design 4.x' },
  ] },
  { key: 'react18', name: 'child-react18', children: [
    { key: '/app-react18', name: 'home' },
    { key: '/app-react18/ant-design', name: 'ant design 5.x' },
  ] },
  { key: 'angular11', name: 'child-angular11', children: [
    { key: '/app-angular11', name: 'home' },
    { key: '/app-angular11/page2', name: 'page2' },
  ] },
  { key: 'nextjs11', name: 'child-nextjs11', children: [
    { key: '/app-nextjs11', name: 'home' },
    { key: '/app-nextjs11/page2', name: 'page2' },
  ] },
  { key: 'nuxtjs2', name: 'child-nuxtjs2', children: [
    { key: '/app-nuxtjs2', name: 'home' },
    { key: '/app-nuxtjs2/page2', name: 'page2' },
  ] },
];

const matchSidebarItemKeys = (key: string): string[] | void => {
  const iter = (menus: SidebarItem[], keys: string[]): string[] | void => {
    for (const menu of menus) {
      if (menu.key === key) {
        return [...keys, menu.key]
      }
      if (typeof menu.key === 'string' && menu.children) {
        const res = iter(menu.children, [...keys, menu.key])
        if (res) {
          return res
        }
      }
    }
  }
  return iter(sidebarItems, [])
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<SidebarItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SidebarItem>();
  currentRoute = '';

  constructor(router: Router) {
    /**
     * 用户点击菜单时控制基座应用、子应用跳转
     * 基座控制子应用跳转分为两个步骤：1、基座跳转 2、子应用跳转
     * 基座跳转后浏览器地址改变，此时子应用并不会响应浏览器的变化，需要主动控制子应用进行内部跳转
     */
    router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      if (this.currentRoute == e.url) {
        return;
      }
      const index = e.url;
      const indexPath = matchSidebarItemKeys(index);
      const currentPath = this.currentRoute;

      if (!indexPath) {
        return;
      }

      // 获取子应用appName
      const appName = indexPath[0];
      // 主应用跳转地址
      const mainPath = indexPath[indexPath.length - 1];
      // 子应用跳转地址需要补充前缀
      const childPath = '/main-angular11' + mainPath;
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
        }));
      }
      const expand = sidebarItems.find(s => s.key === indexPath[0]);
      if (expand) {
        this.treeControl.collapseAll();
        this.treeControl.expand(expand);
      }
      this.currentRoute = index;
    });
    this.dataSource.data = sidebarItems;
  }

  hasChild = (_: number, node: SidebarItem) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
