import { axiosInstance } from './axiosInstance';

// Register partners
export const CreatePartners = async (payload) => {
  try {
    const response = await axiosInstance.post(`/partners`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error("Error creating partner:", error); // More robust error handling
    return error.message;
  }
};

// Get partners
export const GetPartners = async () => {
  try {
    const response = await axiosInstance.get('api/partners/'); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error("Error fetching partners:", error); // More robust error handling
    return error.message;
  }
};

// Get current partner by ID
export const GetPartnersById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/partners/${id}`); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error(`Error fetching partner with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Update partners
export const UpdatePartners = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`/api/partners/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating partner with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a partner
export const DeletePartners = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/partners/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting partner with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
