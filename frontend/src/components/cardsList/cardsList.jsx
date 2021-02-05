import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Pagination } from 'antd';
import Navside from '../navSide/navSide';
import { Button } from 'antd';
import { InputNumber } from 'antd';
import './cardsList.css';
import App from '../../App';
// import createAction from '../../reducers/reducers';
function onChange(value) {
  console.log('changed', value);
}

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };

export default class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    // const arr = this.state.posts.filter((post, i) => {
    //   return post.category == 'electronics';
    // });
  }
  componentWillMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    return (
      <div className="container">
        <Row gutter={[220, 29]} style={{ padding: '50px' }}>
          {this.state.posts
            .filter((el) => {
              return el.category == 'electronics';
            })
            .map((post, i) => (
              <Col key={i} className="gutter-row" span={4}>
                <Card
                  style={{ width: 200 }}
                  cover={<img src={post.image} height="200" width="200" />}
                  actions={[
                    <InputNumber
                      min={1}
                      max={100000}
                      defaultValue={1}
                      onChange={onChange}
                    />,
                    <Button
                      type="primary"
                      // onClick={this.addToCart.bind(
                      //   this,
                      //   image,
                      //   name,
                      //   price,
                      //   id,
                      //   quantity
                      // )}
                    >
                      Add to cart
                    </Button>,
                  ]}
                >
                  <Meta title={post.title} description={post.price} />
                </Card>
              </Col>
            ))}
        </Row>
        <Divider orientation="left"></Divider>
        <Pagination defaultCurrent={1} total={500} />
        <Divider orientation="left"></Divider>
        <Footer style={{ textAlign: 'center' }}>
          Freshky ©2021 Created by R.M.A.M.S
        </Footer>
      </div>
    );
  }
}

// <img key={i} src={post.image} />

// <div key={post.id}>
//   {/* <div>{post.image}</div> */}
//   <h2>{post.title}</h2>
//   <h3>{post.category}</h3>
//   <h5>{post.description}</h5>
//   <h3>{post.price}</h3>
// </div>
