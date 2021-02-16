import React, { Component } from 'react';
import { Card,Space ,Layout, Pagination, InputNumber, Button, Row, Col, Divider   } from 'antd';
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
      size:'large',
    };
  }
  
  componentWillMount() {
    fetch('http://localhost:8080/product')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ products: data })});
  }

  

  render() {
    const { category } = this.props;
    console.log('from cardlist', this.props);
    return (
      <div className="container" >
        
        <Row justify="space-between"  style={{
      alignItems:'flex-end',
      display: 'flex',
      gap:'0px normal',
      justifycontent:'flex-end',
      margin: '0px 4px 1px 5px',
      padding: '201px 201px 202px 206px'
      }} >
        <Space size={[8, 16]} wrap>
          {this.state.products
            .filter((el) => !category || el.category === category)
            .map((post, i) => (
              
              <Col  key={i}  span={4}>
                <Space size={this.state.size} >
                <Card
                  style={{ width: 200, height: 200 }}
                  cover={<img src={post.image} style={{ width: 200, height: 200 }} />}
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
                </Space>
                
              </Col>
               
            ))}
           </Space>
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
