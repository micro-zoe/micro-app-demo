import { Anchor } from 'antd';
import React, { useEffect, useState } from 'react';
const App: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <Anchor
      targetOffset={targetOffset}
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
      ]}
    />
  );
};
export default App;
