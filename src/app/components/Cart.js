import React from 'react';
import { Button } from 'ant-design';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Cart = () => (
  <div>
    <Navbar />
    <main className='p-4'>
      <h1>Your Cart</h1>
      <Button type="primary">Checkout</Button>
      {/* Display cart items here */}
    </main>
    <Footer />
  </div>
);

export default Cart;
