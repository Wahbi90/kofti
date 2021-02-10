import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './redux/root-reducer';
import authReducers from './store/reducers/authReducers';
import productsReducer from './redux/products/productsReducer';
import cartReducer from './redux/cart/cartReducer';
const rootReducer = combineReducers({
  auth: authReducers,
  products: productsReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
