import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:5500/api",
  // baseURL:"https://evangadi-backend-deploy-pxdv.onrender.com"
});

export default axiosBase;
