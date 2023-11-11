import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://myreceipt.onrender.com/api/auth", // Your API base URL
});

export default axiosInstance;
