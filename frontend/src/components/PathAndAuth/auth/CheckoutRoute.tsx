import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { setError } from '../../../redux/auth/authActions';
import { RootState } from '../../../store';
import { connect } from 'react-redux';

interface Props extends RouteProps {
  component: any;
}

interface PropsFromState {
  authenticated: boolean;
  loading: boolean;
}

const CheckoutRoute: FC<Props & PropsFromState> = ({
  component: Component,
  loading,
  authenticated,
  ...rest
}) => {
  const dispatch = useDispatch();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) return <Component {...props} />;
        else {
          dispatch(setError('you have to be logged in'));
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

const mapStateToProps = ({ auth: { authenticated, loading } }: RootState) => ({
  authenticated,
  loading,
});

export default connect(mapStateToProps)(CheckoutRoute);
