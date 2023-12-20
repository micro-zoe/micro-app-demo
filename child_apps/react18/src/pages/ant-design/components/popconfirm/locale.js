import { Popconfirm } from 'antd';
import React from 'react';
const App = () => (
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
);
export default App;
