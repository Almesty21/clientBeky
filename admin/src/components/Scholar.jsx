import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import axios from 'axios';

const ScholarshipForm = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    try {
      const response = await axios.post('/api/scholarships', values);
      console.log('Scholarship submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting scholarship:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Submit Scholarship</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter the title' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: 'Please select the date' }]}
        >
          <DatePicker />
        </Form.Item>
        
        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: 'Please enter the author' }]}
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
          name="comments"
          label="Comments"
          initialValue="0 Comments"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="image"
          label="Image URL"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="link"
          label="Link URL"
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

export default ScholarshipForm;
