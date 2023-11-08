import { Progress } from 'antd';
import React from 'react';
const App = () => (
  <>
    <Progress type="circle" percent={75} format={(percent) => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </>
);
export default App;
