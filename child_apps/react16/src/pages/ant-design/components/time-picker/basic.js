import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
);
export default App;
