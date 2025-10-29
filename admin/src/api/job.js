import { axiosInstance } from './axiosInstance';

// Register job
export const CreateJob = async (payload) => {
  try {
    const response = await axiosInstance.post('/jobs', payload); // Updated endpoint for creating a job
    return response.data;
  } catch (error) {
    console.error("Error creating job:", error); // More robust error handling
    return error.message;
  }
};

// Get all jobs
export const GetJobs = async () => {
  try {
    const response = await axiosInstance.get('/jobs'); // Updated endpoint for fetching jobs
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error); // More robust error handling
    return error.message;
  }
};

// Get job by ID
export const GetJobById = async (id) => {
  try {
    const response = await axiosInstance.get(`/jobs/${id}`); // Updated endpoint for fetching a job by ID
    return response.data;
  } catch (error) {
    console.error(`Error fetching job with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Update job
export const UpdateJob = async (id, payload) => { // Added payload parameter
  try {
    const response = await axiosInstance.put(`/jobs/${id}`, payload); // Updated endpoint for updating a job
    return response.data;
  } catch (error) {
    console.error(`Error updating job with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete job
export const DeleteJob = async (id) => {
  try {
    const response = await axiosInstance.delete(`/jobs/${id}`); // Updated endpoint for deleting a job
    return response.data;
  } catch (error) {
    console.error(`Error deleting job with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
