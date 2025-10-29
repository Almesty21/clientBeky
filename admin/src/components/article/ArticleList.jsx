import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/articles/${id}`)
      .then(() => setArticles(articles.filter(article => article._id !== id)))
      .catch(error => console.error('Error deleting article:', error));
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Content', dataIndex: 'content', key: 'content' },
    { title: 'Author', dataIndex: 'author', key: 'author' },
    { title: 'Tags', dataIndex: 'tags', key: 'tags' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Posted Date', dataIndex: 'postedDate', key: 'postedDate' },
    { title: 'Views', dataIndex: 'views', key: 'views' },
    { title: 'Image URL', dataIndex: 'ImageUrl', key: 'ImageUrl' },
    { 
      title: 'Actions', 
      key: 'actions', 
      render: (_, record) => (
        <div className="flex space-x-2">
          <Link to={`/edit/${record._id}`}>
            <Button type="primary">Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure you want to delete this article?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </div>
      )
    },
  ];

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="flex justify-between mb-4">
        <Link to="/create">
          <Button type="primary">Add Article</Button>
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={articles}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default ArticlesList;
