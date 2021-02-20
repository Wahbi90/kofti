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
import Basket from '../../cart/cart';
import wahbi from './lastest.png';
import { Dropdown, message, Space, Tooltip } from 'antd';
import {
  ShoppingCartOutlined,
  DownOutlined,
  UserOutlined,
} from '@ant-design/icons';

declare module '*.png';

const Headers: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const { Header, Content, Sider } = Layout;

  const logoutClickHandler = () => {
    dispatch(signout());
  };

  var items = JSON.parse(localStorage.getItem('cartItems'));

  const menu = (
    <Menu>
      <Menu.Item disabled={false} key="1" icon={<UserOutlined />}>
        <Basket />
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      {/* <img className="logo" src="../../../../public/logo.png"/> */}
      <Header
        style={{
          backgroundImage: ('untitled-1.png'),
          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          position: 'fixed',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div className="elogo">
          <img
            src={wahbi}
            alt="logo"
            style={{ height: '100px', width: '100px', margin:
            '6px 14px 0px 0px',
            padding:
            '34px 0px 0px' }}
          />
          {/* <img src={'../../../../public/assets/logo2.png'} alt="logo" /> */}
          {/* <img src={'logo2.png'} alt="logo" /> */}
          {/* <img src={} alt="logo" /> */}
        </div>

        {/* <Menu id='nevmenu' theme="dark" mode="horizontal" defaultSelectedKeys={['2']}> */}
        {/* <Link
          className="navbar-item"
          to={!authenticated ? '/' : '/dashboard'}
        ></Link> */}
        {/* <InputNumber min={0} max={100000} defaultValue={0}  style={{height: '40px'}} />,   */}
        {!authenticated ? (
          <div className="buttons">
            <div
              className="button-position"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                margin: '1px 0px 8px',
                // padding: '13px 50px 0px',
              }}
            >
              <Button
                text="Sign Up"
                onClick={() => history.push('/signup')}
                className="is-primary"
              />
              <Button text="Sign In" onClick={() => history.push('/signin')} />
            </div>
          </div>
        ) : (
          <div id="Sign Out" style={{ padding: '13px 0px 3px' }}>
            <Button text="Sign Out" onClick={logoutClickHandler} />
          </div>
        )}
        {/* </Menu> */}
        <div>
          {' '}
          {console.log('danfous khra and wahbi approves', items)}
          <Dropdown overlay={menu} trigger={['click']}>
            <ShoppingCartOutlined
              className="basketbasket"
              style={{
                margin: '14.9px 0px 0px 8px',
                padding: '8px 6px 10px',
                fontSize: '19px',
              }}
            />
            {/* <button className='basketbasket'  style={{  margin: '15px 0px 0px 8px' , padding: '14px 6px 10px'}}> </button> */}
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default Headers;
