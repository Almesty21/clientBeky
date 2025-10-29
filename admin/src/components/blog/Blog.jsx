import React from 'react';
import { Form, Input, Button, DatePicker, InputNumber, Row, Col, Select } from 'antd';
import moment from 'moment';
import { CreateBlogs } from '../../api/blog';
const BlogForm = ({ onSubmit, initialValues = {} }) => {
  const [form] = Form.useForm();

  const handleFinish = async(values) => {
      try {
        const response = await CreateBlogs(values);
        console.log('Blog created successfully:', response);
        // Handle success (e.g., redirect, display a success message, etc.)
      } catch (error) {
        console.error('Error creating blog:', error);
        // Handle error (e.g., display an error message)
      }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Create Blog</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          ...initialValues,
          postedDate: initialValues.postedDate ? moment(initialValues.postedDate) : null,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter the title' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="author"
              label="Author"
              rules={[{ required: true, message: 'Please enter the author name' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="content"
              label="Content"
              rules={[{ required: true, message: 'Please enter the content' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="tags"
              label="Tags"
            >
              <Select mode="tags" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please enter the category' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="postedDate"
              label="Posted Date"
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="views"
              label="Views"
            >
              <InputNumber min={0} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="image"
              label="Image URL"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BlogForm;
