import React from 'react'
import TypeDemo from './type'
import SizeDemo from './size'
import LoadingDemo from './loading'
import GhostDemo from './ghost'
import BlockDemo from './block'
import IconDemo from './icon'
import DisabledDemo from './disabled'
import DropdownDemo from './dropdown'
import DangerDemo from './danger'
import './index.css'

const App = () => (
  <div className="button-demo">
    <hr />
    <h2>Type</h2>
    <TypeDemo />
    <hr />
    <h2>Size</h2>
    <SizeDemo />
    <hr />
    <h2>Loading</h2>
    <LoadingDemo />
    <hr />
    <h2>Ghost</h2>
    <GhostDemo />
    <hr />
    <h2>Block</h2>
    <BlockDemo />
    <hr />
    <h2>Icon</h2>
    <IconDemo />
    <hr />
    <h2>Disabled</h2>
    <DisabledDemo />
    <hr />
    <h2>Dropdown</h2>
    <DropdownDemo />
    <hr />
    <h2>Danger</h2>
    <DangerDemo />
    <hr />
  </div>
);
export default App;
