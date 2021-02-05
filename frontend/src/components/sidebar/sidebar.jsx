import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import React from 'react';
import { changeCategory } from '../../reducers/reducers';
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
// import postItems from '../../App';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar({ changeCategory }) {
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '500vh',
          position: 'fixed',
          left: 0,
          padding: '61px 0px 0px',
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu key="1" icon={<UserOutlined />} title="Categories">
            <Menu.Item key="1" onClick={() => changeCategory('electronics')}>
              electronics
            </Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="2" icon={<VideoCameraOutlined />} title="clothes  ">
            <Menu.Item key="5">option1</Menu.Item>
            <Menu.Item key="6">option2</Menu.Item>
            <Menu.Item key="7">option3</Menu.Item>
            <Menu.Item key="8">option4</Menu.Item>
          </SubMenu>
          {/*
          <SubMenu key="3" icon={<UploadOutlined />} title="categorie 3">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          */}
        </Menu>
      </Sider>
    </Layout>
  );
}

const mapDispatchToProps = { changeCategory };

export default connect(null, mapDispatchToProps)(Sidebar);
