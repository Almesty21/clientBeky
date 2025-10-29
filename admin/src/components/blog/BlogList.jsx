// src/components/BlogList.jsx
import React, { useState, useEffect } from 'react';
import EditBlog from './BlogEdit'; // Import the EditUser component
import axios from 'axios';
import {GetBlogs, UpdateBlogs} from '../../api/blog'
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} className="mb-4">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-600">{blog.author} - {new Date(blog.postedDate).toLocaleDateString()}</p>
            <p>{blog.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
