import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import React from 'react';
import { changeCategory } from '../../redux/products/productsActions';
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
      {/* <img class="logo" src="logo.png" alt="FreshkyLogo" /> */}
      <Sider
        style={{
          overflow: 'auto',
          height: '500vh',
          position: 'fixed',
          left: 0,
          padding: '61px 0px 0px',
          zIndex: 1,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu key="1" icon={<UserOutlined />} title="clothes">
            {/* <Menu.Item key="1">option1</Menu.Item> */}
            <Menu.Item key="1" onClick={() => changeCategory('men clothing')}>
              Men Clothing
            </Menu.Item>
            <Menu.Item key="2" onClick={() => changeCategory('women clothing')}>
              Men Clothing
            </Menu.Item>
          </SubMenu>
          <SubMenu key="4" icon={<AppstoreOutlined />} title="accessoires">
            <Menu.Item key="13" onClick={() => changeCategory('jewelery')}>
              jewelery
            </Menu.Item>
          </SubMenu>
          <SubMenu key="2" icon={<VideoCameraOutlined />} title="electronics">
            <Menu.Item key="5" onClick={() => changeCategory('electronics')}>
              electronics
            </Menu.Item>
            {/* <Menu.Item key="6">option6</Menu.Item> */}
          </SubMenu>
          <SubMenu key="3" icon={<ShopOutlined />} title="food"></SubMenu>
        </Menu>
      </Sider>
    </Layout>
  );
}
const mapDispatchToProps = { changeCategory };
export default connect(null, mapDispatchToProps)(Sidebar);
