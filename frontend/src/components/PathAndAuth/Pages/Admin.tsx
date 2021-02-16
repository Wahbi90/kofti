import React  from 'react';
import { Tabs } from 'antd';
import { Layout, Menu } from 'antd';
import  {Select} from 'antd';  
import { Input, Space } from 'antd';
import Adminproducts from './adminProduct';
import Admincategories from  './adminCategories';
import AdminOrders from './adminOrders'



export default function Admin() {    
const { Option } = Select;
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
function callback(key) {
  
  }
  const onSearch = value => {}

const { TabPane } = Tabs;
    return (
        <>
            <Layout>
            
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Update products" key="1">
     <Adminproducts/>
    </TabPane>
    <TabPane tab="Update categories" key="2">
        <Admincategories/>
    </TabPane>
    <TabPane tab="Orders " key="3">
    <AdminOrders/>
    </TabPane>
  </Tabs>
            </Content>
          </Layout>
        </>
    )
}









































