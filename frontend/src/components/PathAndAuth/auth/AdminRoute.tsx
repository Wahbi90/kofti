import React, { FC } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  RouteProps,
  withRouter,
  RouterProps,
} from 'react-router-dom';
import { RootState } from '../../../store';
import authReducers from '../../../store/reducers/authReducers';
import { User } from '../../../store/types';

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
  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticated && user.types ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
const mapStateToProps = ({
  auth: { authenticated, user, loading },
}: RootState) => ({ authenticated, user, loading });

export default connect(mapStateToProps)(AdminRoute);
