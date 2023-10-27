import React from 'react'
import BasicDemo from './basic'
import VerticalDemo from './vertical'
import SizeDemo from './size'
import AlignDemo from './align'
import CustomizeDemo from './customize'
import WrapDemo from './wrap'
import SplitDemo from './split'
import CompactDemo from './compact'
import CompactbuttonsDemo from './compactbuttons'
import CompactbuttonsverticalDemo from './compactbuttonsvertical'

const App = () => (
  <div className="space-demo">
    <hr />
    <h2>Basic</h2>
    <BasicDemo />
    <hr />
    <h2>Vertical</h2>
    <VerticalDemo />
    <hr />
    <h2>Size</h2>
    <SizeDemo />
    <hr />
    <h2>Align</h2>
    <AlignDemo />
    <hr />
    <h2>Customize</h2>
    <CustomizeDemo />
    <hr />
    <h2>Wrap</h2>
    <WrapDemo />
    <hr />
    <h2>Split</h2>
    <SplitDemo />
    <hr />
    <h2>Compact</h2>
    <CompactDemo />
    <hr />
    <h2>Compactbuttons</h2>
    <CompactbuttonsDemo />
    <hr />
    <h2>Compactbuttonsvertical</h2>
    <CompactbuttonsverticalDemo />
    <hr />
  </div>
);
export default App;
