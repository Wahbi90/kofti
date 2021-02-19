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
import axios from 'axios';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
let search = '';
const { Footer } = Layout;
const { Meta } = Card;
const { Search } = Input;
class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      products: [],
      size: 'large',
      sub: 1,
    };
  }

  componentWillMount() {
    // axios.get('http://localhost:8081/product').then((response) => {
    //   this.setState({ products: response.data });
    // });
    console.log('this.', this.props.category);
    axios
      .post('http://localhost:8081/product/search', {
        title: this.props.category,
      })
      .then((response) => {
        console.log('from axios response', response.data);
        this.setState({ products: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handelchange = (e) => {
    console.log('yuiiiiiiiiiiiiiiii', e);
    this.setState({ sub: e });
  };
  handelsearch = (e) => {
    search = e.target.value;
  };

  render() {
    const { category } = this.props;

    function onShowSizeChange(current, pageSize) {}
    return (
      <div className="container" style={{ zIndex: '1' }}>
        <br />
        <br />
        <br />
        <br />
        <Search
          placeholder="input search text"
          enterButton
          size="small"
          onChange={this.handelsearch}
          style={{
            width: '500px',
            justifyContent: 'center',
            marginLeft: '35%',
          }}
        />
        <Row style={{ marginLeft: 200, marginTop: 100 }}>
          <Space size={[8, 16]} wrap>
            <p>{this.state.count}</p>
            {this.state.products
              .filter((el) => !category || el.category === category)
              .map((post, i) => (
                <Col style={{ paddingLeft: '40px' }} key={i} span={4}>
                  <Space size={this.state.size}>
                    <Card
                      hoverable
                      style={{ width: 170 }}
                      cover={
                        <img
                          alt="example"
                          src={post.image}
                          style={{ height: '170px', width: '300px' }}
                        />
                      }
                    >
                      <Meta title={post.title} description={post.price} />
                      {[
                        <div style={{ padding: '0px 1px 0px 5px' }}>
                          <InputNumber
                            min={1}
                            max={100000}
                            defaultValue={1}
                            onChange={this.handelchange}
                            style={{ width: '60px' }}
                          />
                          <Button
                            onClick={() => {
                              this.props.addToCart(
                                this.props.cartItems,
                                post,
                                this.state.sub,
                              );
                              this.state.sub = 1;
                            }}
                          >
                            ➕
                          </Button>
                        </div>,
                      ]}
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
          defaultCurrent={1}
          total={35}
          style={{ display: 'flex', justifyContent: 'center' }}
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
