import React, { FC, AriaAttributes, DOMAttributes } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button';
import { signout } from '../../../redux/auth/authActions';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShoppingTwoTone } from '@ant-design/icons';
import { InputNumber } from 'antd';
import './Header.css';
import { RootState } from '../../../store';

const Headers: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const { Header, Content, Sider } = Layout;

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  return (
    <Layout>
      <Header style={{ background: 'inear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)' , position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <div className="logo" />

        {/* <Menu id='nevmenu' theme="dark" mode="horizontal" defaultSelectedKeys={['2']}> */}
        {/* <Link
          className="navbar-item"
          to={!authenticated ? '/' : '/dashboard'}
        ></Link> */}
        {/* <InputNumber min={0} max={100000} defaultValue={0}  style={{height: '40px'}} />,   */}
        {!authenticated ? (
          <div className="buttons">
            <div className="button-position" style={{display: 'flex', justifyContent: 'flex-start', margin:'1px 0px 8px', padding:
'13px 50px 0px' }}>
              <Button
                text="Sign Up"
                onClick={() => history.push('/signup')}
                className="is-primary"
              />
              <Button text="Sign In" onClick={() => history.push('/signin')} />
            </div>
          </div>
        ) : (
          <div id='Sign Out' style={{ padding:'13px 0px 3px'}}>
          <Button text="Sign Out" onClick={logoutClickHandler} />
          </div>
        )}
        {/* </Menu> */}
      </Header>
    </Layout>
  );
};

export default Headers;
