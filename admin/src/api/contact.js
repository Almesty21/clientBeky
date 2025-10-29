import { axiosInstance } from './axiosInstance';

// Register Contacts
export const CreateContacts = async (payload) => {
  try {
    const response = await axiosInstance.post(`/contacts`,payload); // Added semicolon
    return response.data;
  } catch (error) {
    return error.message; // You may want to consider a more robust error handling approach
  }
};

// get Contacts
export const GetContacts = async () => {
  try {
    const response = await axiosInstance.post(`api/contacts/`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Get Current Contacts
export const GetContactsById = async (id) => {
  try {
    const response = await axiosInstance.post(`/api/contacts/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//update Contacts 
export const UpdateContacts=async(id)=>{
  try{
    const response =await axiosInstance.put(`/api/contacts/${id}`);
    return response.data;
  }
  catch(error){
    return error.message;
  }
};
//Delete 
//delete a Contacts
export const DeleteContacts=async (id)=>{
  try{
      const response=await axiosInstance.delete(`/api/contacts/${id}`)
      return response.data;
  }
  catch(error){
      return error.message;
  }
}