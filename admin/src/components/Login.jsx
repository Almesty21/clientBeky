import  { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Form, Input, Button , message } from 'antd';
import { useDispatch } from 'react-redux';
import { setLoader } from '../redux/loadersSlice';
import { CreateUser } from "../api/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFinish = async (values) => {
    console.log('Success:', values);
    try {
      dispatch(setLoader(true));
      const response = await CreateUser(values);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        // Store session data in sessionStorage upon successful login
        sessionStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        navigate('/dashboard')
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    // Check if the user is already logged in using sessionStorage
    if (sessionStorage.getItem("isLoggedIn")) {
      navigate("/");
    }
  }, [navigate]);

  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        <img
          src="https://via.placeholder.com/150"
          alt="Logo"
          className="w-1/2"
        />
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl mb-6">Login</h2>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            layout="vertical"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
