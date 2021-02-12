import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Headers from './components/PathAndAuth/Sections/Header';
import SignUp from './components/PathAndAuth/Pages/SignUp';
import SignIn from './components/PathAndAuth/Pages/SignUp';
import ForgotPassword from './components/PathAndAuth/Pages/ForgotPassword';
import Dashboard from './components/PathAndAuth/Pages/Dashboard';
import PrivateRoute from './components/PathAndAuth/auth/PrivateRoute';
import PublicRoute from './components/PathAndAuth/auth/PublicRoute';
import AdminRoute from './components/PathAndAuth/auth/AdminRoute';
import Loader from './components/PathAndAuth/UI/Loader';
import { getUser } from './store/actions/authActions';
import Admin from './components/PathAndAuth/Pages/Admin';
import firebase from './firebase/config';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import CardsList from './components/cardsList/cardsList';
import { Layout } from 'antd';
import {
  getUserById,
  setLoading,
  setNeedVerification,
} from './redux/auth/authActions';
// import { RootState } from './store';
import SIgnIn from './components/PathAndAuth/Pages/SignIn';
import CheckoutRoute from './components/PathAndAuth/auth/CheckoutRoute';
import Checkout from './components/PathAndAuth/Pages/Checkout';
import Payment from './components/PathAndAuth/Pages/Payment';
import PaymentRoute from './components/PathAndAuth/auth/PaymentRoute';

// const App = () => {

const App = ({ getUser, user }) => {
  // const { Header, Content, Footer } = Layout;
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Loader shouldLoad={loading}>
        <Headers />
        <Switch>
          <PublicRoute exact path="/">
            <Sidebar />
            <Cart />
            <CardsList />
            {/* <Home /> */}
          </PublicRoute>
          <AdminRoute path="/admin" component={Admin} />
          <PrivateRoute path="/home" component={Home} />
          <CheckoutRoute path="/checkout" component={Checkout} />
          <PaymentRoute path="/payment" component={Payment} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/signin" component={SIgnIn} />
          <PublicRoute path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Loader>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ auth: { loading, user } }) => ({
  loading,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setLoading: (value) => dispatch(setLoading(value)),
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
