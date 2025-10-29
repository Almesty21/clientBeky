import { axiosInstance } from './axiosInstance';

// Register users
export const CreateUser = async (payload) => {
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

// Update user
export const UpdateUser = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`/api/users/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a user
export const DeleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
