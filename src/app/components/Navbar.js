import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const Navbar = () => (
  <Menu mode="horizontal" theme="dark">
    <Menu.Item key="home">
      <Link href="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="profile">
      <Link href="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item key="cart">
      <Link href="/cart">Cart</Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;