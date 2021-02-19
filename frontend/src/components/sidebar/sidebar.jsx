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






const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
function Sidebar({ changeCategory }) {
  const [categ, setCateg] = useState([])
 function getCateg(){ 
  
   Axios.get('http://localhost:8081/product/categories')
    .then((response) => {
      response.data.map((e) => {categ.push(e)});
      setCateg(categ)
      return categ
    })
    .catch((err) => {
      console.log(err, 'hedhi el err');
    });
 }
  
  useEffect(() => {
getCateg()
    },[])

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
          background: '#ffffff',
          border: '#d4d2d270',
          borderStyle: 'groove',
          borderWidth: '1px',
        }}
      >
        <div className="logo" />
        <Input placeholder="Basic usage" />
        <Menu
          style={{ background: '#ffffff00' }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
        >   
          {categ.map((e, i) => {
            console.log(e,'categ 2')
           return <Menu.Item
              style={{ background: '#ffffff00' }}
              key={i}
              onClick={() => changeCategory(e)}
            >
              {e}
            </Menu.Item>;
          })}
        </Menu>
      </Sider>
    </Layout>
  );
}

const mapDispatchToProps = { changeCategory };
export default connect(null, mapDispatchToProps)(Sidebar);
