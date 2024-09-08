import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const { Content } = Layout;

const Page = () => {
  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
          {/* Page content goes here */}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Page;
