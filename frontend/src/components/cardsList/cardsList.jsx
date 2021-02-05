import React from "react";
import { Row, Col, Divider } from 'antd';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Pagination } from 'antd';
import { Button } from 'antd';
import { InputNumber } from 'antd';
import './cardsList.css';


function onChange(value) {
  console.log('changed', value);
};


const { Meta } = Card;
  const { Header, Content, Footer, Sider } = Layout;
  const style = { background: '#0092ff', padding: '8px 0' };



function CardsList() {
  
//  const addToCart=  (image, name, price, id, quantity) =>{
//     this.setState(
//       {
//         selectedProduct: {
//           image: image,
//           name: name,
//           price: price,
//           id: id,
//           quantity: quantity
//         }
//       },
//       function() {
//         this.props.addToCart(this.state.selectedProduct);
//       }
//     );
//     this.setState(
//       {
//         isAdded: true
//       },
//       function() {
//         setTimeout(() => {
//           this.setState({
//             isAdded: false,
//             selectedProduct: {}
//           });
//         }, 3500);
//       }
//     );
//   }
  
//   let image = this.props.image;
//     let name = this.props.name;
//     let price = this.props.price;
//     let id = this.props.id;
//     let quantity = this.props.productQuantity; 

    return (
     
      <div className='container'>
    <Row gutter={[220, 29]} style={{padding:"50px"}}>
      <Col className="gutter-row" span={4}>
      <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />,
      <Button type="primary"
      // onClick={this.addToCart.bind(
      //   this,
      //   image,
      //   name,
      //   price,
      //   id,
      //   quantity
      // )}
      >
        Add to cart</Button>
      
    ]}
  >
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col className="gutter-row" span={4}>
      <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />,
      <Button type="primary">Add to cart</Button>
      
    ]}
  >
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col className="gutter-row" span={4}>
      <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />,
      <Button type="primary">Add to cart</Button>
      
    ]}
  >
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col className="gutter-row" span={4}>
      <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />,
      <Button type="primary">Add to cart</Button>
      
    ]}
  >
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col className="gutter-row" span={4}>
      <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />,
      <Button type="primary">Add to cart</Button>
      
    ]}
  >
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col><Col className="gutter-row" span={4}>
      <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />,
      <Button type="primary">Add to cart</Button>
      
    ]}
  >
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col className="gutter-row" span={4}>
      <Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <InputNumber min={1} max={100000} defaultValue={1} onChange={onChange} />,
      <Button type="primary">Add to cart</Button>
      
    ]}
  >
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>

    </Row>
    <Divider orientation="left"></Divider>
   <Pagination defaultCurrent={1} total={500} />
   <Divider orientation="left"></Divider>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>


  
      </div>
    )

    
  } 

export default CardsList;







{/* <Card
    style={{ width: 200 }}
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
    <Meta
     
      title="Card title"
      description="This is the description"
    />
  </Card> */}