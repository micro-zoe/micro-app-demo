import { AutoComplete, Space } from 'antd';
import React, { useState } from 'react';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [options, setOptions] = useState([]);
  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <AutoComplete
        options={options}
        onSearch={onSearch}
        status="error"
        style={{
          width: 200,
        }}
      />
      <AutoComplete
        options={options}
        onSearch={onSearch}
        status="warning"
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};
export default App;
