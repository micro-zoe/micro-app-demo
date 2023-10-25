import React from 'react'
import BasicDemo from './basic'
import TitleDemo from './title'
import LinkDemo from './link'
import EditableDemo from './editable'
import EllipsisDemo from './ellipsis'
import SuffixDemo from './suffix'
import RowsDemo from './rows'

const App = () => (
  <div className="typography-demo">
    <hr />
    <h2>Basic</h2>
    <BasicDemo />
    <hr />
    <h2>Title</h2>
    <TitleDemo />
    <hr />
    <h2>Link</h2>
    <LinkDemo />
    <hr />
    <h2>Editable</h2>
    <EditableDemo />
    <hr />
    <h2>Ellipsis</h2>
    <EllipsisDemo />
    <hr />
    <h2>Suffix</h2>
    <SuffixDemo />
    <hr />
    <h2>Rows</h2>
    <RowsDemo />
    <hr />
  </div>
);
export default App;
