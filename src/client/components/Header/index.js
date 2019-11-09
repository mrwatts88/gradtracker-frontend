import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';

const { Header: AntdHeader } = Layout;

export const Header = props => (
  <AntdHeader>
    <a className="logo" href="http://www.uwm.edu"></a>
    <span id="nav">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['/']}
        selectedKeys={[props.path]}
        style={{ lineHeight: '64px' }}
      >
        {props.path !== '/login' && (
          <Menu.Item key="/">
            <Link to="/">HOME</Link>
          </Menu.Item>
        )}
        {props.path !== '/login' && (
          <Menu.Item key="/registration">
            <Link to="/registration">REGISTER A USER</Link>
          </Menu.Item>
        )}
        {props.path !== '/login' && (
          <Menu.Item style={{ float: 'right' }} key="/login">
            <div onClick={props.logOut}>LOG OUT</div>
          </Menu.Item>
        )}
      </Menu>
    </span>
  </AntdHeader>
);

export default connect(null, { logOut })(Header);
