// src/components/UserList.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Select, Alert } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate(); 

  const handleFinish = async (values) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage\
    console.log("token from user list: ", token);
    if (!token) {
      setError('Unauthorized access. Please log in again.');
      return;
    }

    try {
      const payload = {
        username: values.username,
        email: values.email,
        password: values.password,
        role: values.role,
      };

      console.log("Payload:", payload); // Log the payload

      const response = await axios.post(`${apiUrl}/users/register`, payload, {
        headers: {
          'Content-Type': 'application/json', // Ensure this header is set
          'Authorization': `Bearer ${token}`,
        },
        withCredentials: true, // Ensure credentials are sent
      });

      console.log("Response:", response.data);
      if (onSubmit) {
        onSubmit(response.data);
      }

      form.resetFields();
      setError(null); // Clear error if submission is successful

      // Redirect to the user list page
      navigate('/get-users');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.response?.data?.message || 'An error occurred while submitting the form.');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Create User</h2>
      {error && <Alert message={error} type="error" showIcon />}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={initialValues}
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
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter the password' }]}
        >
          <Input.Password />
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

export default UserForm;
