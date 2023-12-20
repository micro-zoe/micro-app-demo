import { Button, message, Space } from 'antd';
import React from 'react';
const success = () => {
  const hide = message.loading('Action in progress..', 0, () => {
    message.success('loading had closed');
  });
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};
const success2 = () => {
  message.loading('Action in progress..', 3, () => {
    message.success('loading had closed');
  });
};
const App = () => (
  <Space>
    <Button onClick={success}>Display a loading indicator</Button>
    <Button onClick={success2}>Display a loading and auto hide</Button>
  </Space>
);
export default App;
