import { Alert, Calendar } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(() => moment('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => moment('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </>
  );
};
export default App;
