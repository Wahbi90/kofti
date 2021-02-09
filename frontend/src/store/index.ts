import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducers from './reducers/authReducers';

const rootReducer = combineReducers({
  auth: authReducers,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
