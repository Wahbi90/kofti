import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers/reducers';
const initial = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initial,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
