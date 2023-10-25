import React from 'react'
import { Tabs } from 'antd'
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
