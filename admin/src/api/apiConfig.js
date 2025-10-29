// Define the base URL for your API
const BASE_URL = 'http://localhost:8080/api';

// Export endpoints and base URL
export const API_URLS = {
  ARTICLES: `${BASE_URL}/articles`,
  ARTICLE_BY_ID: (id) => `${BASE_URL}/articles/${id}`,
  COMMENTS: (articleId) => `${BASE_URL}/articles/${articleId}/comments`,
};
