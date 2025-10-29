import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';

const Sidebar = () => (
  <Menu mode="inline" theme="dark" className="h-full">
    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
      <Link to="/dashboard">Dashboard</Link>
    </Menu.Item>
    <Menu.Item key="userlist" icon={<UserOutlined />}>
      <Link to="/users">User List</Link>
    </Menu.Item>
  </Menu>
);

export default Sidebar;
