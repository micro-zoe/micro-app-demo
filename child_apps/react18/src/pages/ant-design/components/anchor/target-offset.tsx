import React, { useEffect, useState } from 'react';
import { Anchor, Row, Col } from 'antd';

const App: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-t1"
            style={{ height: '100px', background: 'rgba(255,0,0,0.02)', marginTop: '30px' }}
          >
            Part 1
          </div>
          <div id="part-t2" style={{ height: '100px', background: 'rgba(0,255,0,0.02)' }}>
            Part 2
          </div>
          <div id="part-t3" style={{ height: '100px', background: 'rgba(0,0,255,0.02)' }}>
            Part 3
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: 'part-t1',
                href: '#part-t1',
                title: 'Part 1',
              },
              {
                key: 'part-t2',
                href: '#part-t2',
                title: 'Part 2',
              },
              {
                key: 'part-t3',
                href: '#part-t3',
                title: 'Part 3',
              },
            ]}
          />
        </Col>
      </Row>

      <div
        style={{
          height: '30px',
          background: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          color: '#FFF',
        }}
        ref={topRef}
      >
        <div>Fixed Top Block</div>
      </div>
    </div>
  );
};

export default App;
