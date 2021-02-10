import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RootState } from '../../../store';
import { connect } from 'react-redux';

interface Props extends RouteProps {
  component: any;
}

interface PropsFromState {
  authenticated: boolean;
  loading: boolean;
}

const PrivateRoute: FC<Props & PropsFromState> = ({ 
  component: Component,
  loading,
  authenticated,
  ...rest }) => {

  return (
      <Route
        {...rest}
        render={(props) => {
          return authenticated ? 
          ( <Component {...props} />
            ) : ( <Redirect to="/" />
            );
        }}
      />
    )
};

const mapStateToProps = ({
  auth: { authenticated, loading },
}: RootState) => ({ authenticated, loading });

export default connect(mapStateToProps)(PrivateRoute);
