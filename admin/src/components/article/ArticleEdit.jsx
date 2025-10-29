// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ArticleForm from './components/createArticles';

// const EditArticle = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/articles/${id}`)
//       .then(response => setInitialValues(response.data))
//       .catch(error => console.error('Error fetching article:', error));
//   }, [id]);

//   const handleSubmit = (values) => {
//     axios.put(`http://localhost:5000/articles/${id}`, values)
//       .then(() => navigate('/'))
//       .catch(error => console.error('Error updating article:', error));
//   };

//   return initialValues ? (
//     <div className="max-w-md mx-auto my-10 p-4 bg-gray-800 rounded-md shadow-md">
//       <ArticleForm onSubmit={handleSubmit} initialValues={initialValues} />
//     </div>
//   ) : null;
// };

// export default EditArticle;
