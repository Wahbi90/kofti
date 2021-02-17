import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartActions';
import { Redirect, Router, withRouter } from 'react-router-dom';

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
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item, i) => {
                return (
                  <li key={i}>
                    <b>{item.title}</b>
                    <button
                      style={{ float: 'right' }}
                      className="btn btn-danger btn-xs"
                      onClick={(e) => {
                        this.props.removeFromCart(this.props.cartItems, item);
                      }}
                    >
                      ❌
                    </button>
                    <br />
                    {item.count} X {item.price}
                  </li>
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
            <button onClick={this.checkout.bind(this)}>CheckOut</button>
          </div>
        )}
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
