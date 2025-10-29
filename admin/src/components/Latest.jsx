import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const ContentForm = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    try {
      const response = await axios.post('/api/contents', values);
      console.log('Content submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting content:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Create Content</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          name="image"
          label="Image URL"
          rules={[{ required: true, message: 'Please enter the image URL' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter the title' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="guest"
          label="Guest"
          rules={[{ required: true, message: 'Please enter the guest' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please enter the category' }]}
        >
          <Input />
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

export default ContentForm;
