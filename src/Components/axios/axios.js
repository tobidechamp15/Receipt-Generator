import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://generatinginvoiceapp.onrender.com/api', // Your API base URL
});

export default axiosInstance;
