import { axiosInstance } from './axiosInstance';

// Register scholars
export const CreateScholars = async (payload) => {
  try {
    const response = await axiosInstance.post('/scholars', payload); // Added payload
    return response.data;
  } catch (error) {
    console.error("Error creating scholar:", error); // More robust error handling
    return error.message;
  }
};

// Get scholars
export const GetScholars = async () => {
  try {
    const response = await axiosInstance.get('/scholars'); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error("Error fetching scholars:", error); // More robust error handling
    return error.message;
  }
};

// Get current scholar by ID
export const GetScholarsById = async (id) => {
  try {
    const response = await axiosInstance.get(`/scholars/${id}`); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error(`Error fetching scholar with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Update scholars
export const UpdateScholars = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`/scholars/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating scholar with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a scholar
export const DeleteScholars = async (id) => {
  try {
    const response = await axiosInstance.delete(`/scholars/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting scholar with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
