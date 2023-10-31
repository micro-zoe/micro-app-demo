import { MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import React, { useState } from 'react';
function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}
const App = () => {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    getItem(
      'Navigation One',
      'sub1',
      <MailOutlined />,
      [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
      theme,
    ),
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ];
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
      />
    </>
  );
};
export default App;
