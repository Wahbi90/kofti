import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const {  Header, Content,Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar() {
    return (
      <Layout>
      <Sider
        style={{
          overflow: 'auto' ,
          height: '500vh',
          position: 'fixed',
          left: 0,
          padding: '61px 0px 0px',
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu  key="1" icon={<UserOutlined />}title="categorie 1" >
          <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu >
          <SubMenu  key="2" icon={<VideoCameraOutlined />} title="categorie 2">
          <Menu.Item key="5">option1</Menu.Item>
            <Menu.Item key="6">option2</Menu.Item>
            <Menu.Item key="7">option3</Menu.Item>
            <Menu.Item key="8">option4</Menu.Item>
          </SubMenu >
          <SubMenu  key="3" icon={<UploadOutlined />} title="categorie 3">
          <Menu.Item key="9">option1</Menu.Item>
            <Menu.Item key="10">option2</Menu.Item>
            <Menu.Item key="11">option3</Menu.Item>
            <Menu.Item key="12">option4</Menu.Item>
          </SubMenu >
        </Menu>
      </Sider>
    </Layout>
      
    )
      
      

  }


export default Sidebar;
