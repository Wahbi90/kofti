import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

export const addToCart = (items, product) => (dispatch) => {
  var sum = 0;
  const arr = localStorage.getItem('cartItems');
  const products = JSON.parse(arr);
  const cartItems = products || items.slice();
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
  var sum = 0;
  const cartItems = items.slice().filter((a) => a.title !== product.title);

  cartItems.map((el) => {
    sum = sum + el.price * el.count;
  });
  console.log('from remove', sum);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('sum', JSON.stringify(sum));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
