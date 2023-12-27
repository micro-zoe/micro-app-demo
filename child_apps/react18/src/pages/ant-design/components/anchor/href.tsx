import React from 'react';
import { Anchor, Col, Row } from 'antd';

const App: React.FC = () => (
  <Row>
    <Col span={16}>
      <div id="part-hr1" style={{ height: '100px', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-hr2" style={{ height: '100px', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-hr3" style={{ height: '100px', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        replace
        items={[
          {
            key: 'part-hr1',
            href: '#part-hr1',
            title: 'Part 1',
          },
          {
            key: 'part-hr2',
            href: '#part-hr2',
            title: 'Part 2',
          },
          {
            key: 'part-hr3',
            href: '#part-hr3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);

export default App;
