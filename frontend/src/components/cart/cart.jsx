import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartActions';

class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          'Basket is empty'
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: 'right' }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) => {
                      this.props.removeFromCart(this.props.cartItems, item);
                      console.log(item);
                    }}
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {item.price}
                </li>
              ))}
            </ul>

            <b>Total: </b>
            <button
              onClick={() => alert('Todo: Implement checkout page.')}
              className="btn btn-primary"
            >
              checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
