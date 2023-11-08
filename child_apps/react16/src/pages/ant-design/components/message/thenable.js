import { Button, message } from 'antd';
import React from 'react';
const success = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};
const App = () => <Button onClick={success}>Display sequential messages</Button>;
export default App;
