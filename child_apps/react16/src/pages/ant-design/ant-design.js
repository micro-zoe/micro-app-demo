import React from 'react'
import { Tabs } from 'antd'
import Button from './components/button'
import Icon from './components/icon'
import Typography from './components/typography'
import Divider from './components/divider'
import Form from './components/form'
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
            label: `Button 按钮`,
            key: 'Button',
            children: <><h1>child-react16-ant-design-4.x: Button</h1><Button /></>,
          },
          {
            label: `Icon 图标`,
            key: 'Icon',
            children: <><h1>child-react16-ant-design-4.x: Icon</h1><Icon /></>,
          },
          {
            label: `Typography 排版`,
            key: 'Typography',
            children: <><h1>child-react16-ant-design-4.x: Button</h1><Typography /></>,
          },
          {
            label: `布局`,
            key: '布局',
            disabled: true,
          },
          {
            label: `Divider 分割线`,
            key: 'Divider',
            children: <><h1>child-react16-ant-design-4.x: Divider</h1><Divider /></>,
          },
          {
            label: `数据录入`,
            key: '数据录入',
            disabled: true,
          },
          {
            label: `Form 表单`,
            key: 'Form',
            children: <><h1>child-react16-ant-design-4.x: Form</h1><Form /></>,
          },
        ]}
      />
    </div>
  );
}

export default AntDesignPage
