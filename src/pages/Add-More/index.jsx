import { Suspense, lazy, useState } from 'react';
import { Typography, Row, Tabs } from 'antd';
import SourceCode from '../../components/SourceCode';
import Fallback from '../../components/Fallback';

const FunctionalComponent = lazy(() => import('./functional-based'));
const ClassBasedComponent = lazy(() => import('./class-based'));

function AddMore() {
  const [type, setType] = useState('class-based');

  const items = [
    {
      key: 'class-based',
      label: 'Class',
      children: (
        <Suspense fallback={<Fallback />}>
          <ClassBasedComponent />
        </Suspense>
      ),
    },
    {
      key: 'functional-based',
      label: 'Function',
      children: (
        <Suspense fallback={<Fallback />}>
          <FunctionalComponent />
        </Suspense>
      ),
    },
  ];
  return (
    <>
      <Row align="middle" justify="center">
        <Typography.Title level={2}> Add More Example</Typography.Title>
      </Row>
      <SourceCode value={`https://github.com/react-scheduler/react-big-schedule-example/blob/master/src/pages/Add-More/${type}.jsx`} />
      <Tabs activeKey={type} items={items} onChange={setType} />
    </>
  );
}

export default AddMore;
