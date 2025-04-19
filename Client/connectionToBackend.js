import axios from 'axios';

const apiConnectToBackend = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,    
  withCredentials: true,
})

apiConnectToBackend.interceptors.request.use((config) => {
  const token =  localStorage.getItem("getToken")
  if(token){
    config.headers.Authorization = `Bearer $(token)`
  }
  return config
})

export const registerUser = async (userData) => {
  try {
    const response = await apiConnectToBackend.post('/user/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export const loginUser = async (userData) => {
  try {
    const response = await apiConnectToBackend.post('/user/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
}

export const logoutUser = async () => {
  try {
    const response = await apiConnectToBackend.get('/user/logout');
    return response.data;
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
}


export const profile =async () =>{
  try{
    const response = await apiConnectToBackend.get("/user/getProfile");
    return response.data;
  }catch(error){
    console.error("Error in getting user profile", error)
    throw error
  }
}