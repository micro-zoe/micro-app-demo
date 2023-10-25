import React from 'react'
import BasicDemo from './basic'
import TwotoneDemo from './twotone'
import CustomDemo from './custom'
import IconfontDemo from './iconfont'
import IconfontsDemo from './iconfonts'

const App = () => (
  <div className="button-demo">
    <hr />
    <h2>Basic</h2>
    <BasicDemo />
    <hr />
    <h2>Twotone</h2>
    <TwotoneDemo />
    <hr />
    <h2>Custom</h2>
    <CustomDemo />
    <hr />
    <h2>Iconfont</h2>
    <IconfontDemo />
    <hr />
    <h2>Iconfonts</h2>
    <IconfontsDemo />
    <hr />
  </div>
);
export default App;
