import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface FoodNode {
  label?: string;
  key?: string;
  type?: string;
  children?: FoodNode[];
}

const sidebarItems: FoodNode[] = [
  { type: 'divider' },
  { key: '/', label: '首页' },
  { type: 'divider' },
  // 👇 一级菜单 key 为子应用名称，二级菜单 key 为路由地址
  { key: 'vue2', label: 'child-vue2', children: [
    { key: '/app-vue2', label: 'home' },
    { key: '/app-vue2/element-ui', label: 'element-ui' },
    { key: '/app-vue2/ant-design-vue', label: 'ant-design-vue' },
  ] },
  { key: 'vue3', label: 'child-vue3', children: [
    { key: '/app-vue3', label: 'home' },
    { key: '/app-vue3/page2', label: 'page2' },
  ] },
  { key: 'vite', label: 'child-vite', children: [
    { key: '/app-vite', label: 'home' },
    { key: '/app-vite#/page2', label: 'page2' },
  ] },
  { key: 'react16', label: 'child-react16', children: [
    { key: '/app-react16', label: 'home' },
    { key: '/app-react16/ant-design', label: 'ant design 4.x' },
  ] },
  { key: 'react18', label: 'child-react18', children: [
    { key: '/app-react18', label: 'home' },
    { key: '/app-react18/ant-design', label: 'ant design 5.x' },
  ] },
  { key: 'angular11', label: 'child-angular11', children: [
    { key: '/app-angular11', label: 'home' },
    { key: '/app-angular11/page2', label: 'page2' },
  ] },
  { key: 'nextjs11', label: 'child-nextjs11', children: [
    { key: '/app-nextjs11', label: 'home' },
    { key: '/app-nextjs11/page2', label: 'page2' },
  ] },
  { key: 'nuxtjs2', label: 'child-nuxtjs2', children: [
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

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
  imports: [MatTreeModule, MatButtonModule, MatIconModule]
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = sidebarItems;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
