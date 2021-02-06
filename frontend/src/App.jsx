import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Sidebar from './components/sidebar/sidebar';
import CardsList from './components/cardsList/cardsList';
import { Layout, Menu, Breadcrumb } from 'antd';
import Cart from './components/cart/cart';
import Headers from './components/PathAndAuth/Sections/Header';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/PathAndAuth/Sections/Header';

import SignUp from './components/PathAndAuth/Pages/SignUp';
import SignIn from './components/PathAndAuth/Pages/SignIn';
import ForgotPassword from './components/PathAndAuth/Pages/ForgotPassword';
import HomePage from './components/PathAndAuth/Pages/HomePage';
import Dashboard from './components/PathAndAuth/Pages/Dashboard';
import PrivateRoute from './components/PathAndAuth/auth/PrivateRoute';
import PublicRoute from './components/PathAndAuth/auth/PublicRoute';
import Loader from './components/PathAndAuth/UI/Loader';
import firebase from './firebase/config';
import {
  getUserById,
  setLoading,
  setNeedVerification,
} from './store/actions/authActions';
// import { RootState } from './store';
import SIgnIn from './components/PathAndAuth/Pages/SignIn';

const App = () => {
  // const { Header, Content, Footer } = Layout;
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setLoading(true));
    const unsub = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsub();
    };
  }, [dispatch]);

  if (loading) {
    <Loader />;
  }

  return (
    <BrowserRouter>
      <Headers />
      <Switch>
        <PublicRoute exact path="/">
          <Sidebar />
          <Home />
        </PublicRoute>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PublicRoute path="/signup" component={SignUp} />
        <PublicRoute path="/signin" component={SIgnIn} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
      </Switch>

      {/* <div
        className="site-layout-background"
        style={{ padding: 250, marginTop: -150 }}
      >
        <CardsList /> */}

      {/* <Cart/> */}
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
