import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import axios from 'axios';

const VideoForm = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    try {
      const response = await axios.post('/api/videos', values);
      console.log('Video submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting video:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Upload Video</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          name="videoSrc"
          label="Video Source URL"
          rules={[{ required: true, message: 'Please enter the video source URL' }]}
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
        
        <Form.Item
          name="episode"
          label="Episode"
          rules={[{ required: true, message: 'Please enter the episode number' }]}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter the title' }]}
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

export default VideoForm;
