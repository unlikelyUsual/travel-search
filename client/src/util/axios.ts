import Axios from "axios";

const axios = Axios.create({
  //   baseURL: "https://localhost:3000",
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