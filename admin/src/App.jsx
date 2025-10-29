import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ArticleForm from './components/article/createArticles';
import BlogForm from './components/blog/Blog';
import Login from './pages/Login'; 
import UserList from './components/UserList';

//import EditArticle from './components/article/ArticleEdit';
const AppRoutes = () => (

  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/get-users" element={<UserList />} />
      <Route path="/create" element={<ArticleForm/>} />
      <Route path="/blog" element={<BlogForm/>} />
  {/*    <Route path="/edit/:id" element={<EditArticle/>} />
   */} </Routes>
  </Router>
);

export default AppRoutes;
