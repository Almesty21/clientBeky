// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message } from 'antd';
import axios from 'axios';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import EditUser from './EditUser'; // Import the EditUser component

const { confirm } = Modal;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${apiUrl}/users/get-users`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
        message.error('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const showDeleteConfirm = (userId) => {
    confirm({
      title: 'Are you sure delete this user?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDeleteClick(userId);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const handleDeleteClick = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${apiUrl}/users/delete/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setUsers(users.filter(user => user._id !== userId));
      message.success('User deleted successfully');
    } catch (error) {
      console.error('Failed to delete user', error);
      message.error('Failed to delete user');
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const handleUserUpdate = (updatedUser) => {
    setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
    handleModalClose();
    message.success('User updated successfully');
  };

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => handleEditClick(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(record._id)}
            danger
            style={{ marginLeft: '10px' }}
          />
        </>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">User List</h2>
      <Table columns={columns} dataSource={users} rowKey="_id" loading={loading} />

      <Modal
        title="Edit User"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedUser && (
          <EditUser
            user={selectedUser}
            onUpdate={handleUserUpdate}
          />
        )}
      </Modal>
    </div>
  );
};

export default UserList;
