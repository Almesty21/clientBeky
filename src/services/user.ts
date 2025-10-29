import { axiosInstance } from './apiConfig';
import {  ApiResponse } from "../models/error";
import {ILoginInput, UserPayload} from '../models/auth';

// Register users
export const createUser = async  (payload: UserPayload): Promise<ApiResponse<UserPayload>> => {
  try {
    const response = await axiosInstance.post<ApiResponse<UserPayload>>(`/users/register`, payload);
      // Added payload
    return response.data;
  } catch (error:any) {
     console.error('Error creating users:', error);
    throw new Error(error.response?.data?.message || 'Failed to subscribe');
  }
};

// Get users
export const GetUsers = async  (payload:ILoginInput):Promise<ApiResponse<ILoginInput>> => {
  try {
    const response = await axiosInstance.get('/users/login'); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error); // More robust error handling
    return error.message;
  }
};

// Get current user by ID
export const GetUserById = async (id): Promise<ApiResponse<UserPayload>>=> {
  try {
    const response = await axiosInstance.get(`/users/${id}`); // Changed to GET request
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Update user
export const UpdateUser = async (id, payload:UserPayload) : Promise<ApiResponse<UserPayload>>=>{ // Added payload parameter
  try {
    const response = await axiosInstance.put(`/users/${id}`, payload); // Added payload
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};

// Delete a user
export const DeleteUser = async (id) : Promise<ApiResponse<UserPayload>>=> {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error); // More robust error handling
    return error.message;
  }
};
