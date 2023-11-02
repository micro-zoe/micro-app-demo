import { TimePicker } from 'antd';
import React from 'react';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker
      use12Hours
      format="h:mm:ss A"
      onChange={onChange}
      style={{
        width: 140,
      }}
    />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </>
);
export default App;
