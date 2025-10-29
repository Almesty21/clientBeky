import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogForm from './components/blog/Blog'; // Create a BlogForm similar to the ArticleForm

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/blogs/${id}`)
      .then(response => setInitialValues(response.data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [id, apiUrl]);

  const handleSubmit = (values) => {
    axios.put(`${apiUrl}/blogs/${id}`, values)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating blog:', error));
  };

  return initialValues ? (
    <div className="max-w-md mx-auto my-10 p-4 bg-gray-800 rounded-md shadow-md">
      <BlogForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  ) : null;
};

export default EditBlog;
