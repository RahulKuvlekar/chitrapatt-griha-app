import axios from "axios";

const axiosReq = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default axiosReq;
