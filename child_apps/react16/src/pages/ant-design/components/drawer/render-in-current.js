import './render-in-current.css';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="site-drawer-render-in-current-wrapper">
      Render in this
      <div
        style={{
          marginTop: 16,
        }}
      >
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        style={{
          position: 'absolute',
        }}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default App;
