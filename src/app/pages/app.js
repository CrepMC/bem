import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const App = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
          <Title>Welcome to ShoeStore</Title>
          <Paragraph>Discover the best shoes for every occasion.</Paragraph>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
