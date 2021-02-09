import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Sidebar from './components/sidebar/sidebar';
import Headers from './components/PathAndAuth/Sections/Header';
import SignUp from './components/PathAndAuth/Pages/SignUp';
import SignIn from './components/PathAndAuth/Pages/SignIn';
import ForgotPassword from './components/PathAndAuth/Pages/ForgotPassword';
import Dashboard from './components/PathAndAuth/Pages/Dashboard';
import PrivateRoute from './components/PathAndAuth/auth/PrivateRoute';
import PublicRoute from './components/PathAndAuth/auth/PublicRoute';
import AdminRoute from './components/PathAndAuth/auth/AdminRoute';
import Loader from './components/PathAndAuth/UI/Loader';
import { getUser, setLoading } from './store/actions/authActions';
import Admin from './components/PathAndAuth/Pages/Admin';

const App = ({ loading, getUser, user }) => {
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
            <Home />
          </PublicRoute>
          <AdminRoute path="/admin" component={Admin} />
          <PrivateRoute path="/home" component={Home} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/signin" component={SignIn} />
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
