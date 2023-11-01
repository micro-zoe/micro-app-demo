import { Input } from 'antd';
import React from 'react';
const { TextArea } = Input;
const onChange = (e) => {
  console.log(e);
};
const App = () => (
  <>
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
  </>
);
export default App;
