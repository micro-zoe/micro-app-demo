import './basic.css';
import { PageHeader } from 'antd';
import React from 'react';
const App = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
);
export default App;
