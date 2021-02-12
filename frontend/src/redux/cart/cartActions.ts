import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

export const addToCart = (items, product) => (dispatch) => {
  var sum = 0;
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.map((cp) => {
    if (cp.title === product.title) {
      cp.count += 1;
      productAlreadyInCart = true;
      console.log(cartItems);
    }
  });

  if (!productAlreadyInCart) {
    console.log('nope', productAlreadyInCart);
    cartItems.push({ ...product, count: 1 });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  cartItems.map((el) => {
    sum = sum + el.price * el.count;
  });
  localStorage.setItem('sum', JSON.stringify(sum));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.title !== product.title);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
