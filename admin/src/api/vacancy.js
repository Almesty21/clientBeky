import { axiosInstance } from './axiosInstance';

// Register jobs
export const CreateBlogs = async (payload) => {
  try {
    const response = await axiosInstance.post(`/jobs`); // Added semicolon
    return response.data;
  } catch (error) {
    return error.message; // You may want to consider a more robust error handling approach
  }
};

// get jobs
export const GetBlogs = async () => {
  try {
    const response = await axiosInstance.post(`/jobs`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Get Current jobs
export const GetBlogsById = async (id) => {
  try {
    const response = await axiosInstance.post(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//update jobs 
export const UpdateBlogs=async(id)=>{
  try{
    const response =await axiosInstance.put(`/jobs/${id}`);
    return response.data;
  }
  catch(error){
    return error.message;
  }
};
//Delete 
//delete a jobs
export const DeleteBlogs=async (id)=>{
  try{
      const response=await axiosInstance.delete(`/jobs/${id}`)
      return response.data;
  }
  catch(error){
      return error.message;
  }
}