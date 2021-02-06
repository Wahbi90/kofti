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
import { Button } from 'antd';
import { InputNumber } from 'antd';
import './cardsList.css';
import App from '../../App';
import { connect } from 'react-redux';
// import createAction from '../../reducers/reducers';

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentWillMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    const { category } = this.props;
    return (
      <div className="container">
        <Row gutter={[220, 29]} style={{ padding: '50px' }}>
          {this.state.posts
            .filter((el) => !category || el.category === category)
            .map((post, i) => (
              <Col key={i} className="gutter-row" span={4}>
                <Card
                  style={{ width: 200 }}
                  cover={<img src={post.image} height="200" width="200" />}
                  actions={[
                    <InputNumber min={1} max={100000} defaultValue={1} />,
                    <Button type="primary">Add to cart</Button>,
                  ]}
                >
                  <Meta
                    title={post.title}
                    description={<h3>{post.price}</h3>}
                  />
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

const mapStateToProps = (state) => ({
  category: state.currentCategorie,
});

export default connect(mapStateToProps)(CardsList);
// <img key={i} src={post.image} />

// <div key={post.id}>
//   {/* <div>{post.image}</div> */}
//   <h2>{post.title}</h2>
//   <h3>{post.category}</h3>
//   <h5>{post.description}</h5>
//   <h3>{post.price}</h3>
// </div>
