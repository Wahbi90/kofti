import React, { FC } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Route,
  Redirect,
  RouteProps,
  withRouter,
  RouterProps,
} from 'react-router-dom';
import { RootState } from '../../../store';
import authReducers from '../../../store/reducers/authReducers';
import { User } from '../../../redux/auth/authTypes';
import { setError } from '../../../redux/auth/authActions';

interface Props extends RouteProps {
  component: any;
}

interface PropsFromState {
  authenticated: boolean;
  user: User;
  loading: boolean;
}

const AdminRoute: FC<Props & PropsFromState> = ({
  component: Component,
  loading,
  user,
  authenticated,
  ...rest
}) => {
  const dispatch = useDispatch();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated && user.types) return <Component {...props} />;
        else {
          dispatch(setError('You need to be an admin to acces this page'));
          return <Redirect to="/signin" />;
        }
      }}

    />
  );
};
const mapStateToProps = ({
  auth: { authenticated, user, loading },
}: RootState) => ({ authenticated, user, loading });

export default connect(mapStateToProps)(AdminRoute);
