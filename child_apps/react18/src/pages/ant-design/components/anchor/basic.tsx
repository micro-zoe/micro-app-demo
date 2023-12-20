import React from 'react';
import { Anchor } from 'antd';

const App: React.FC = () => (
  <Anchor
    affix={false}
    items={[
      {
        key: 'basic',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: 'static',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: 'api',
        href: '#API',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#Anchor-Props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#Link-Props',
            title: 'Link Props',
          },
        ]
      },
    ]}
  />
);
export default App;
