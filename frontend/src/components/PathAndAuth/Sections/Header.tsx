import React, { FC, AriaAttributes, DOMAttributes } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button';
import { RootState } from '../../../store';
import { setLoading, signout } from '../../../store/actions/authActions';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShoppingTwoTone } from '@ant-design/icons';
import { InputNumber } from 'antd';
import './Header.css';

const Headers: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const { Header } = Layout;

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />

        {/* <Menu id='nevmenu' theme="dark" mode="horizontal" defaultSelectedKeys={['2']}> */}
        <Link className="navbar-item" to={!authenticated ? '/' : '/home'}>
          sssss
        </Link>
        {/* <InputNumber min={0} max={100000} defaultValue={0} /> */}
        {!authenticated ? (
          <div className="buttons">
            <div className="button-position">
              <Button
                text="Sign Up"
                onClick={() => history.push('/signup')}
                className="is-primary"
              />
              <Button text="Sign In" onClick={() => history.push('/signin')} />
            </div>
          </div>
        ) : (
          <Button text="Sign Out" onClick={logoutClickHandler} />
        )}
        {/* </Menu> */}
      </Header>
    </Layout>
  );
};

export default Headers;
