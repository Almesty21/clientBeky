import React from 'react';
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Account</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Support</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Sign Out</Menu.Item>
  </Menu>
);

const Header = () => (
  <div className="header flex justify-between items-center p-4 shadow">
    <div className="logo text-xl font-bold">ADMIN</div>
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <UserOutlined /> <span className="ml-2">Profile</span>
      </a>
    </Dropdown>
  </div>
);

export default Header;
