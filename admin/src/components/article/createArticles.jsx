import React from 'react';
import { Form, Input, Button, DatePicker, Row, Col } from 'antd';

const ArticleForm = ({ onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create Article</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={initialValues}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter the title' }]}
            >
              <Input placeholder="Enter the article title" />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              name="author"
              label="Author"
              rules={[{ required: true, message: 'Please enter the author name' }]}
            >
              <Input placeholder="Enter the author's name" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: 'Please enter the content' }]}
        >
          <Input.TextArea rows={6} placeholder="Enter the article content" />
        </Form.Item>
        
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="tags"
              label="Tags"
            >
              <Input placeholder="Enter tags separated by commas" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please enter the category' }]}
            >
              <Input placeholder="Enter the article category" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="postedDate"
              label="Posted Date"
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-1/4">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ArticleForm;
