import React,{ FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom'

import Header from './Component/Sections/Header';
import SignUp from './Component/Pages/SignUp';
import SignIn from './Component/Pages/SignIn';
import ForgotPassword from './Component/Pages/ForgotPassword';
import HomePage from './Component/Pages/HomePage';
import Dashboard from './Component/Pages/Dashboard';
import PrivateRoute from './Component/auth/PrivateRoute';
import PublicRoute from './Component/auth/PublicRoute';
import Loader from './Component/UI/Loader';
import firebase from './firebase/config';
import { getUserById, setLoading, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';
import SIgnIn from './Component/Pages/SignIn';

const App: FC = () => {
const dispatch = useDispatch();
const { loading } = useSelector((state: RootState) => state.auth);

useEffect(() => {
  dispatch(setLoading(true));
  const unsub = firebase.auth().onAuthStateChanged(async (user) => {
    if (user){
      dispatch(setLoading(true));
      await dispatch(getUserById(user.uid));
      if (!user.emailVerified){
        dispatch(setNeedVerification());
      }
    }
    dispatch(setLoading(false));
  });

return () => {
  unsub();
} 

}, [dispatch]);

if (loading) {
  <Loader />;
}

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PublicRoute path='/' component={HomePage} exact />
        <PublicRoute path='/signup' component={SignUp} exact />
        <PublicRoute path='/signin' component={SIgnIn} exact />
        <PublicRoute path='/forgot-password' component={ForgotPassword} exact />
        <PrivateRoute path='/dashboard' component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
