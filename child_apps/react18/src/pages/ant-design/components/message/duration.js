import { Button, message } from 'antd';
import React from 'react';
const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};
const App = () => <Button onClick={success}>Customized display duration</Button>;
export default App;
