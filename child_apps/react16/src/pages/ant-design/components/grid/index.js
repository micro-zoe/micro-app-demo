import React from 'react'
import BasicDemo from './basic'
import GutterDemo from './gutter'
import OffsetDemo from './offset'
import PullDemo from './pull'
import JustifyDemo from './justify'
import AlignDemo from './align'
import OrderDemo from './order'
import FlexDemo from './flex'
import MqDemo from './mq'
import MqproDemo from './mqpro'
import GeneratorDemo from './generator'
import UsebreakpointDemo from './usebreakpoint'
import './index.css'

const App = () => (
  <div className="grid-demo">
    <hr />
    <h2>Basic</h2>
    <BasicDemo />
    <hr />
    <h2>Gutter</h2>
    <GutterDemo />
    <hr />
    <h2>Offset</h2>
    <OffsetDemo />
    <hr />
    <h2>Pull</h2>
    <PullDemo />
    <hr />
    <h2>Justify</h2>
    <JustifyDemo />
    <hr />
    <h2>Align</h2>
    <AlignDemo />
    <hr />
    <h2>Order</h2>
    <OrderDemo />
    <hr />
    <h2>Flex</h2>
    <FlexDemo />
    <hr />
    <h2>Mq</h2>
    <MqDemo />
    <hr />
    <h2>Mqpro</h2>
    <MqproDemo />
    <hr />
    <h2>Generator</h2>
    <GeneratorDemo />
    <hr />
    <h2>Usebreakpoint</h2>
    <UsebreakpointDemo />
    <hr />
  </div>
);
export default App;
