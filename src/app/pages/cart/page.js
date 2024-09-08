import React from 'react';
import { Button, Layout } from 'antd';
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import '../../../styles/globals.css';

const { Content } = Layout;

const Cart = () => (
  <Layout>
    <Navbar />
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
        <h1>Your Cart</h1>
        <Button type="primary">Checkout</Button>
        {/* Display cart items here */}
      </div>
    </Content>
    <Footer />
  </Layout>
);

export default Cart;
