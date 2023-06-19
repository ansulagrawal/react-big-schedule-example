import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Landing() {
  return (
    <Layout className="main-layout">
      <Layout.Header className="main-header">
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}

export default Landing;
