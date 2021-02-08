import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import authReducer from './auth/authReducer';
import productsReducer from './products/productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
