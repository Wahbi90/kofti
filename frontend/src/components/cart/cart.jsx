import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartActions';
import { Redirect, Router, withRouter } from 'react-router-dom';
import {
  CloseCircleOutlined
} from '@ant-design/icons';
import './cart.css'
import { Button, Space, Upload, Popconfirm } from 'antd';
class Basket extends Component {
  checkout() {
    this.props.history.push('/checkout');
  }
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          'Basket is empty'
        ) : (
          <div className="itemsBasket">
            You have {cartItems.length} items in the basket. <hr />
          </div>
          

        )}
        <div className="table">
        <div className="layout-inline row th">
        <div className="col col-pro">Product</div>
    
        <div className="col col-price align-center ">Price</div>       
        <div className="col col-qty ">QTY</div>
        <div className="col col-qty ">Delete</div>
        

        
      </div>
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item, i) => {
                return (
                  
                  
                    <div key={i} className="layout-inline row" >
        
        <div className="col col-pro layout-inline">
          <img src={item.image} style={{height :'75px', width: '80px'}}/>
          <p>{item.title}</p>
        </div>
        
        <div className="col col-price col-numeric align-center " style={{paddingTop: '50px'}}>
          <p>{item.price}TND</p>
        </div>

        <div className="col col-qty layout-inline" style={{padding: '80px '}}>
            <input type="numeric" value={item.count} />

        </div>
        <CloseCircleOutlined 
                    className="btn btn-danger btn-xs"
                    style={{    color: 'red' , fontSize: '25px' , padding: '100px' }}
                    onClick={(e) => {
                      this.props.removeFromCart(this.props.cartItems, item);
                    }}

                    />
      </div>
                  
                );
              })}
            </ul>
            <br></br>
            <h2>
              Total Quantity :
              {cartItems.reduce(function (t, el, i) {
                return (t += el.count);
              }, 0)}
            </h2>
            <b className="total">Total:{localStorage.getItem('sum')}</b>
            <br></br>
            <Button type="primary" onClick={this.checkout.bind(this)}>CheckOut</Button>
          </div>
        )}
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(
  withRouter(Basket),
);