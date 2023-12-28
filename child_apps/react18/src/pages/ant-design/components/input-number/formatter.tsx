import React from 'react';
import { InputNumber, Space } from 'antd';

const onChange = (value: unknown) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => `${value}%`}
      onChange={onChange}
    />
  </Space>
);

export default App;
