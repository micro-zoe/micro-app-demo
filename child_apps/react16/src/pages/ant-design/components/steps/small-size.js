import { Steps } from 'antd';
import React from 'react';
const App = () => (
  <Steps
    size="small"
    current={1}
    items={[
      {
        title: 'Finished',
      },
      {
        title: 'In Progress',
      },
      {
        title: 'Waiting',
      },
    ]}
  />
);
export default App;