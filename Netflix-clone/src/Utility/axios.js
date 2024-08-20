import axios from "axios";

// use axios to create
// an instance with base URL
const axios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default axios;