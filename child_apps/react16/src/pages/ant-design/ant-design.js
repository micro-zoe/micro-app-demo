import React from 'react'
import { Tabs } from 'antd'
import ButtonDemo from './components/button';
import IconDemo from './components/icon';
import TypographyDemo from './components/typography';
import DividerDemo from './components/divider';
import GridDemo from './components/grid';
import LayoutDemo from './components/layout';
import SpaceDemo from './components/space';
import AffixDemo from './components/affix';
import BreadcrumbDemo from './components/breadcrumb';
import DropdownDemo from './components/dropdown';
import MenuDemo from './components/menu';
import PageHeaderDemo from './components/page-header';
import PaginationDemo from './components/pagination';
import StepsDemo from './components/steps';
import AutoCompleteDemo from './components/auto-complete';
import './ant-design.css'

const AntDesignPage = () => {
  return (
    <div className="ant-design-demo">
      <Tabs
        size="small"
        tabPosition="left"
        defaultActiveKey="Button"
        className="ant-design-demo-tabs"
        style={{ height: 'calc(100vh - 100px)', width: 'calc(100vw - 256px)' }}
        items={[
          {
            label: `通用`,
            key: '通用',
            disabled: true,
          },
          {
            label: 'Button 按钮',
            key: 'Button',
            children: <><h1>child-react16-ant-design-4.x: Button 按钮</h1><ButtonDemo /></>,
          },
          {
            label: 'Icon 图标',
            key: 'Icon',
            children: <><h1>child-react16-ant-design-4.x: Icon 图标</h1><IconDemo /></>,
          },
          {
            label: 'Typography 排版',
            key: 'Typography',
            children: <><h1>child-react16-ant-design-4.x: Typography 排版</h1><TypographyDemo /></>,
          },
          {
            label: `布局`,
            key: '布局',
            disabled: true,
          },
          {
            label: 'Divider 分割线',
            key: 'Divider',
            children: <><h1>child-react16-ant-design-4.x: Divider 分割线</h1><DividerDemo /></>,
          },
          {
            label: 'Grid 栅格',
            key: 'Grid',
            children: <><h1>child-react16-ant-design-4.x: Grid 栅格</h1><GridDemo /></>,
          },
          {
            label: 'Layout 布局',
            key: 'Layout',
            children: <><h1>child-react16-ant-design-4.x: Layout 布局</h1><LayoutDemo /></>,
          },
          {
            label: 'Space 间距',
            key: 'Space',
            children: <><h1>child-react16-ant-design-4.x: Space 间距</h1><SpaceDemo /></>,
          },
          {
            label: `导航`,
            key: '导航',
            disabled: true,
          },
          {
            label: 'Affix 固钉',
            key: 'Affix',
            children: <><h1>child-react16-ant-design-4.x: Affix 固钉</h1><AffixDemo /></>,
          },
          {
            label: 'Breadcrumb 面包屑',
            key: 'Breadcrumb',
            children: <><h1>child-react16-ant-design-4.x: Breadcrumb 面包屑</h1><BreadcrumbDemo /></>,
          },
          {
            label: 'Dropdown 下拉菜单',
            key: 'Dropdown',
            children: <><h1>child-react16-ant-design-4.x: Dropdown 下拉菜单</h1><DropdownDemo /></>,
          },
          {
            label: 'Menu 导航菜单',
            key: 'Menu',
            children: <><h1>child-react16-ant-design-4.x: Menu 导航菜单</h1><MenuDemo /></>,
          },
          {
            label: 'PageHeader 页头',
            key: 'PageHeader',
            children: <><h1>child-react16-ant-design-4.x: PageHeader 页头</h1><PageHeaderDemo /></>,
          },
          {
            label: 'Pagination 分页',
            key: 'Pagination',
            children: <><h1>child-react16-ant-design-4.x: Pagination 分页</h1><PaginationDemo /></>,
          },
          {
            label: 'Steps 步骤条',
            key: 'Steps',
            children: <><h1>child-react16-ant-design-4.x: Steps 步骤条</h1><StepsDemo /></>,
          },
          {
            label: `数据录入`,
            key: '数据录入',
            disabled: true,
          },
          {
            label: 'AutoComplete 自动完成',
            key: 'AutoComplete',
            children: <><h1>child-react16-ant-design-4.x: AutoComplete 自动完成</h1><AutoCompleteDemo /></>,
          },
        ]}
      />
    </div>
  );
}

export default AntDesignPage
