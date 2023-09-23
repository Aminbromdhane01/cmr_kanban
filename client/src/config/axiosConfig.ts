import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333', // Replace with your server URL
  timeout: 10000, // Adjust as needed
});

// Function to set the JWT token in the headers
const setAuthToken = (token : any) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export { axiosInstance, setAuthToken };