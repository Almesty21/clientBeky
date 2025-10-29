import { axiosInstance } from './axiosInstance';

// Register Articles
export const CreateArticles = async (payload) => {
  try {
    const response = await axiosInstance.post(`api/articles/`); // Added semicolon
    return response.data;
  } catch (error) {
    return error.message; // You may want to consider a more robust error handling approach
  }
};

// get articles
export const GetArticles = async () => {
  try {
    const response = await axiosInstance.post(`api/articles/`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Get Current articles
export const GetArticlesById = async (id) => {
  try {
    const response = await axiosInstance.post(`/api/articles/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//update articles 
export const updateArticles=async(id)=>{
  try{
    const response =await axiosInstance.put(`/api/articles/${id}`);
    return response.data;
  }
  catch(error){
    return error.message;
  }
};

//delete an articles
export const DeleteArticles=async (id)=>{
  try{
      const response=await axiosInstance.delete(`/api/articles/${id}`)
      return response.data;
  }
  catch(error){
      return error.message;
  }
}

// Register users
export const CreateUsers = async (payload) => {
  try {
    const response = await axiosInstance.post('api/users/', payload); // Added payload
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error); // More robust error handling
    return error.message;
  }
};

// Get users
export const GetUsers = async () => {
  try {
    const response = await axiosInstance.get('api/users/'); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error); // More robust error handling
    return error.message;
  }
};

// Get current user by ID
export const GetUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/users/${id}`); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Update users
export const UpdateUsers = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`/api/users/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a user
export const DeleteUsers = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
