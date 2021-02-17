import React from 'react';
// import { Carousel } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Card, Avatar, Carousel  } from 'antd';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Input, Space } from 'antd';
import './home.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
const onSearch = (value) => {}

function onChange(a, b, c) {
 
}

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Home() {
  const { Search } = Input;
  return (
    <Layout>
      <Layout>
        <Layout style={{ padding: ' 50px 0px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Carousel autoplay style={{ width: '900px', height: '600px'}}>
              <div >
              <img className='set' src="assets/orange.jpg"  ></img>
              </div>             
              <div >
              <img   className='set'  src="assets/watermelon.jpg"  ></img>
              </div>
              <div >
             <img   className='set'  src="assets/strawberry.jpg"  ></img>
             </div>
             <div >
             <img className='set'  src="assets/lemonflavw.jpg"  ></img>
             </div>
            </Carousel>
            <Divider orientation="left">Most Sold Products</Divider>
            <Row justify="space-around">
              {
                <Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card>
              }
              <Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card>
                <Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card>
                <Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card>
                <Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card><Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card>
                <Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card>
                <Card
                  style={{ width: 150 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title="title" description="This is the description" />
                </Card>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
