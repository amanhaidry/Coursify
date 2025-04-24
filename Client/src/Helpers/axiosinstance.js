import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://coursify-server-f836.onrender.com/api/v1" // Production server URL
    : "http://localhost:5000/api/v1"; // Local server URL

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
