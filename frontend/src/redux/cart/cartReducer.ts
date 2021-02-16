import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';
const arr = localStorage.getItem('cartItems');

const products = JSON.parse(arr) || [];
const initialState = {
  items: products,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };

    default:
      return state;
  }
}
