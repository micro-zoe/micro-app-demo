import React from 'react'
import BasicDemo from './basic'
import ChangeDemo from './change'
import TargetDemo from './target'
import './index.css'

const App = () => (
  <div className="affix-demo">
    <hr />
    <h2>Basic</h2>
    <BasicDemo />
    <hr />
    <h2>Change</h2>
    <ChangeDemo />
    <hr />
    <h2>Target</h2>
    <TargetDemo />
    <hr />
  </div>
);
export default App;
