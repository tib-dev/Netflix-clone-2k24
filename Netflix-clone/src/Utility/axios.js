import axios from "axios";

// Use axios to create an instance with a base URL
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default axiosInstance;
