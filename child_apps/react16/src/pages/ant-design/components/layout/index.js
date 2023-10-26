import React from 'react'
import BasicDemo from './basic'
import TopDemo from './top'
import Topside2Demo from './topside2'
import TopsideDemo from './topside'
import SideDemo from './side'
import CustomtriggerDemo from './customtrigger'
import ResponsiveDemo from './responsive'
import FixedDemo from './fixed'
import FixedsiderDemo from './fixedsider'

const App = () => (
  <div className="layout-demo">
    <hr />
    <h2>Basic</h2>
    <BasicDemo />
    <hr />
    <h2>Top</h2>
    <TopDemo />
    <hr />
    <h2>Topside2</h2>
    <Topside2Demo />
    <hr />
    <h2>Topside</h2>
    <TopsideDemo />
    <hr />
    <h2>Side</h2>
    <SideDemo />
    <hr />
    <h2>Customtrigger</h2>
    <CustomtriggerDemo />
    <hr />
    <h2>Responsive</h2>
    <ResponsiveDemo />
    <hr />
    <h2>Fixed</h2>
    <FixedDemo />
    <hr />
    <h2>Fixedsider</h2>
    <FixedsiderDemo />
    <hr />
  </div>
);
export default App;
