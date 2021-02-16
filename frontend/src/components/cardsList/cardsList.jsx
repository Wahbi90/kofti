import React, { Component } from 'react';
import {
  Card,
  Space,
  Layout,
  Pagination,
  InputNumber,
  Button,
  Row,
  Col,
  Divider,
} from 'antd';
import { connect } from 'react-redux';
import './cardsList.css';
import { addToCart, removeFromCart } from '../../redux/cart/cartActions';

const { Meta } = Card;
const { Footer } = Layout;

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      products: [],
      size: 'large',
      sub: 0,
    };
  }

  componentWillMount() {
    fetch('http://localhost:8081/product')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ products: data });
      });
  }
  handelchange = (e) => {
    console.log('yuiiiiiiiiiiiiiiii', e);
    this.setState({ sub: e });
  };

  render() {
    const { category } = this.props;
    
    function onShowSizeChange(current, pageSize) {
       
      }
    return (
      <div className="container">
        <Row
          style={{ marginLeft: 200, marginTop: 100 }}
          // justify="space-between"
          // style={{
          //   alignItems: 'flex-end',
          //   display: 'flex',
          //   gap: '0px normal',
          //   justifycontent: 'flex-end',
          //   margin: '0px 4px 1px 5px',
          //   padding: '201px 201px 202px 206px',
          // }}
        >
          <Space size={[8, 16]} wrap>
            <p>{this.state.count}</p>
            {this.state.products
              .filter((el) => !category || el.category === category)
             .map((post, i) => (
                <Col key={i} span={4}>
                  <Space size={this.state.size}>
                    <Card
                      style={{ marginRight: 50, width: 100, height: 100 }}
                      cover={
                        <img
                          src={post.image}
                          style={{
                            width: 200,
                            height: 100,
                            alignContent: 'center',
                          }}
                        />
                          
                      }
                      // height="200" width="200"
                      actions={[
                        <InputNumber
                          min={1}
                          max={100000}
                          defaultValue={1}
                          onChange={this.handelchange}
                        />,
                        <Button
                          onClick={() => {
                            this.props.addToCart(this.props.cartItems, post);
                          }}
                        >
                          ➕
                        </Button>,
                      ]}
                    >
                      <Meta
                        style={{ fontSize: 10, marginBottoms: -100 }}
                        title={
                          <h6 style={{ fontSize: 10, alignItems: 'left' }}>
                            {post.title}
                          </h6>
                        }
                        description={<h3>{post.price}</h3>}
                      />
                    </Card>
                  </Space>
                </Col>
              ))}
          </Space>
        </Row>
        <Divider orientation="left"></Divider>
         <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
        <Divider orientation="left"></Divider>
        <Footer style={{ textAlign: 'center' }}>
          Freshky ©2021 Created by R.M.A.M.S
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.products.currentCategorie,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(
  CardsList,
);
