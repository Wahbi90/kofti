import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { connect } from 'react-redux';
import React,{useState,useEffect} from 'react';
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
import { Component } from 'react';
import Axios from 'axios';
// import postItems from '../../App';

let allCateg = [];
const getCateg = async () => {
  const datacateg = await Axios.get('http://localhost:8081/product/categories');
  console.log(datacateg.data, 'yooooo');
  allCateg = datacateg.data;
  return allCateg;
  window.reload();
};
getCateg();

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
function Sidebar({ changeCategory }) {
  function handelChange(e) {
    e.target.value;
  }

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
          zIndex: 2,
          margin: '64px 0px 6px',
          background: '#FFFFFF',
          border: '#d4d2d270',
          borderStyle: 'groove',
          borderWidth: '1px',
        }}
      >
        <div className="logo" />
        <Input placeholder="Basic usage" onChange={(e) => handelChange(e)} />
        <Menu
          style={{ background: '#ffffff00' }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {allCateg.map((e, i) => {
            console.log(e);
            return (
              <Menu.Item
                style={{ background: '#ffffff00' }}
                key={i}
                onClick={() => changeCategory(e)}
              >
                {e}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = { changeCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
