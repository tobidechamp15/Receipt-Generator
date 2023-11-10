import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://receipt-6j94.onrender.com/api/", // Your API base URL
});

export default axiosInstance;
