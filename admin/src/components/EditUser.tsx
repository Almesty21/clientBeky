// src/components/EditUser.jsx
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Alert } from 'antd';
import axios from 'axios';

const EditUser: React.FC = { ({ user, onUpdate }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const handleFinish = async (values) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${apiUrl}/users/edit/${user._id}`, values, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      onUpdate(response.data);
    } catch (error) {
      setError('Failed to update user');
      console.error(error);
    }
  };

  return (
    <div>
      {error && <Alert message={error} type="error" showIcon />}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter the username' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter the email' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: 'Please select the role' }]}
        >
          <Select>
            <Select.Option value="user">User</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="superadmin">Superadmin</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUser;
