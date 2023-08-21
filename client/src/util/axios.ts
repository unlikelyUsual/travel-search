import Axios from "axios";

export const isProd: boolean = process.env.NODE_ENV === "production";

const axios = Axios.create({
  baseURL: isProd ? "https://travel-search-9y9t.onrender.com" : "http://localhost:4000",
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
