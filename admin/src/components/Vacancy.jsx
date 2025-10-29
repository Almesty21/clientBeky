import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import axios from 'axios';

const JobForm = () => {
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    try {
      const response = await axios.post('/api/jobs', values);
      console.log('Job submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Create Job Listing</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          name="title"
          label="Job Title"
          rules={[{ required: true, message: 'Please enter the job title' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="description"
          label="Job Description"
          rules={[{ required: true, message: 'Please enter the job description' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        
        <Form.Item
          name="experience"
          label="Experience Required"
          rules={[{ required: true, message: 'Please enter the experience required' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="deadline"
          label="Application Deadline"
          rules={[{ required: true, message: 'Please enter the application deadline' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please enter the job location' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="jobType"
          label="Job Type"
          rules={[{ required: true, message: 'Please enter the job type' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="qualifications"
          label="Qualifications"
          rules={[{ required: true, message: 'Please enter the qualifications' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="keyResponsibilities"
          label="Key Responsibilities"
          rules={[{ required: true, message: 'Please enter the key responsibilities' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="keySkills"
          label="Key Skills"
          rules={[{ required: true, message: 'Please enter the key skills' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="languages"
          label="Languages"
          rules={[{ required: true, message: 'Please enter the required languages' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: 'Please enter the start date' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="email"
          label="Contact Email"
          rules={[{ required: true, message: 'Please enter the contact email' }, { type: 'email', message: 'Invalid email address' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Contact Phone"
          rules={[{ required: true, message: 'Please enter the contact phone number' }]}
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

export default JobForm;
