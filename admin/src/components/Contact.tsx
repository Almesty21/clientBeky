import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    try {
      const response = await axios.post('/api/contacts', values);
      console.log('Contact submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting contact:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Contact Us</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your full name' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email address' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="subject"
          label="Subject"
          rules={[{ required: true, message: 'Please enter a subject' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea rows={4} />
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

export default ContactForm;