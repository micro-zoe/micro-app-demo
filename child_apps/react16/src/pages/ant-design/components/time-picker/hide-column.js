import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
const format = 'HH:mm';
const App = () => <TimePicker defaultValue={moment('12:08', format)} format={format} />;
export default App;
