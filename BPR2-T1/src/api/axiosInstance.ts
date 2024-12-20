import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dineease.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;