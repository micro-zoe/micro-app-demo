import { Anchor } from 'antd';
import React from 'react';
const App = () => (
  <Anchor
    affix={false}
    replace
    items={[
    {
      key: '1',
      href: '#components-anchor-demo-basic',
      title: 'Basic demo',
    },
    {
      key: '2',
      href: '#components-anchor-demo-static',
      title: 'Static demo',
    },
    {
      key: '3',
      href: '#api',
      title: 'API',
      children: [
        {
          key: '4',
          href: '#anchor-props',
          title: 'Anchor Props',
        },
        {
          key: '5',
          href: '#link-props',
          title: 'Link Props',
        },
      ],
    },
  ]}>
  </Anchor>
);
export default App;
