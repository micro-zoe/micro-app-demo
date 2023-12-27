import React from 'react';
import { Anchor } from 'antd';

const App: React.FC = () => (
  <>
    <div style={{ padding: '20px' }}>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-h1',
            href: '#part-h1',
            title: 'Part 1',
          },
          {
            key: 'part-h2',
            href: '#part-h2',
            title: 'Part 2',
          },
          {
            key: 'part-h3',
            href: '#part-h3',
            title: 'Part 3',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-h1"
        style={{
          width: '10vw',
          height: '100px',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-h2"
        style={{
          width: '100vw',
          height: '100px',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-h3"
        style={{ width: '100vw', height: '100px', textAlign: 'center', background: '#FFFBE9' }}
      />
    </div>
  </>
);

export default App;
