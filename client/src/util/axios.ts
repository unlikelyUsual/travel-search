import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://travel-search-9y9t.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
  console.log(config.data);
  return config;
});
axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

export default axios;
