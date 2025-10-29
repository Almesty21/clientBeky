import { axiosInstance } from './axiosInstance';

// Register podcasts
export const CreatePodcasts = async (payload) => {
  try {
    const response = await axiosInstance.post(`/podcasts`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error("Error creating podcast:", error); // More robust error handling
    return error.message;
  }
}

// Get podcasts
export const GetPodcasts = async () => {
  try {
    const response = await axiosInstance.get('/podcasts'); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error("Error fetching podcasts:", error); // More robust error handling
    return error.message;
  }
}

// Get current podcast by ID
export const GetPodcastsById = async (id) => {
  try {
    const response = await axiosInstance.get(`/podcasts/${id}`); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error(`Error fetching podcast with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
}

// Update podcasts
export const UpdatePodcasts = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`/podcasts/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating podcast with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a podcast
export const DeletePodcasts = async (id) => {
  try {
    const response = await axiosInstance.delete(`/podcasts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting podcast with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
}
