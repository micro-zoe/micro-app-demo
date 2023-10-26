import React from 'react'
import HorizontalDemo from './horizontal'
import OrientationDemo from './orientation'
import PlainDemo from './plain'
import VerticalDemo from './vertical'

const App = () => (
  <div className="divider-demo">
    <hr />
    <h2>Horizontal</h2>
    <HorizontalDemo />
    <hr />
    <h2>Orientation</h2>
    <OrientationDemo />
    <hr />
    <h2>Plain</h2>
    <PlainDemo />
    <hr />
    <h2>Vertical</h2>
    <VerticalDemo />
    <hr />
  </div>
);
export default App;
