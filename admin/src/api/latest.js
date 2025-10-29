import { axiosInstance } from './axiosInstance';

// Register latest
export const CreateLatest = async (payload) => {
  try {
    const response = await axiosInstance.post('/latest', payload); // Added payload
    return response.data;
  } catch (error) {
    console.error("Error creating latest:", error); // More robust error handling
    return error.message;
  }
};

// Get latest
export const GetLatest = async () => {
  try {
    const response = await axiosInstance.get('/latest'); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error("Error fetching latest:", error); // More robust error handling
    return error.message;
  }
};

// Get current latest by ID
export const GetLatestById = async (id) => {
  try {
    const response = await axiosInstance.get(`/latest/${id}`); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error(`Error fetching latest with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Update latest
export const UpdateLatest = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`s/latest/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating latest with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a latest
export const DeleteLatest = async (id) => {
  try {
    const response = await axiosInstance.delete(`/latest/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting latest with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
