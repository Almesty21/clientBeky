import { axiosInstance } from './axiosInstance';

// Register subscribes
export const sendEmail = async (payload) => {
  try {
    const response = await axiosInstance.post('/subscribes', payload); // Added payload
    return response.data;
  } catch (error) {
    console.error("Error creating subscribe:", error); // More robust error handling
    return error.message;
  }
};

// Get subscribes
export const GetSubscribes = async () => {
  try {
    const response = await axiosInstance.get('/subscribes'); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error("Error fetching subscribes:", error); // More robust error handling
    return error.message;
  }
};

// Get current subscribe by ID
export const GetSubscribesById = async (id) => {
  try {
    const response = await axiosInstance.get(`/subscribes/${id}`); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error(`Error fetching subscribe with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
}

// Update subscribes
export const UpdateSubscribes = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`/subscribes/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating subscribe with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a subscribe
export const DeleteSubscribes = async (id) => {
  try {
    const response = await axiosInstance.delete(`/subscribes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting subscribe with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
