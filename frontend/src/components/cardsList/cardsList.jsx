import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Card } from 'antd';
import { Layout } from 'antd';
import { Pagination } from 'antd';
import { Button } from 'antd';
import { InputNumber } from 'antd';
import { connect } from 'react-redux';
import './cardsList.css';
// import RootState from '../../store'
// import changeCategory from '../../redux/products/productsActions'

const { Meta } = Card;
const { Footer } = Layout;

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      products: [],
    };
  }
  componentWillMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const { category } = this.props;
    console.log(this.props, 'from zebi');
    console.log('from cardlist', this.props);
    return (
      <div className="container">
        <Row gutter={[220, 39]} style={{ padding: '200px' }}>
          {this.state.products
            .filter((el) => !category || el.category === category)
            .map((post, i) => (
              <Col key={i} className="gutter-row" span={4}>
                <Card
                  style={{ width: 200 }}
                  cover={<img src={post.image} height="200" width="200" />}
                  // height="200" width="200"
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
        <Pagination
          defaultCurrent={1}
          total={500}
          style={{ paddingLeft: '500px' }}
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
