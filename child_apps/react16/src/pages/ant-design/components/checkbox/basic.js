import { Checkbox } from 'antd';
import React from 'react';
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const App = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;
export default App;
