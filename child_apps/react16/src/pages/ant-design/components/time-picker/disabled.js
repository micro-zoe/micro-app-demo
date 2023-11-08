import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
const App = () => <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />;
export default App;
