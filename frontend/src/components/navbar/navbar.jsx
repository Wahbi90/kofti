import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShoppingTwoTone } from '@ant-design/icons';
import './navbar.css';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

function Navbar() {
  const { Header, Content, Sider } = Layout;
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          id="nevmenu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <InputNumber
            min={0}
            max={100000}
            defaultValue={0}
            onChange={onChange}
          />
          <Menu.Item key="1">login</Menu.Item>
          <Menu.Item key="2">signup</Menu.Item>
          <Menu.Item key="3">{<ShoppingTwoTone />}</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Navbar;
