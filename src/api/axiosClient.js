import axios from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: "http://192.168.1.93:8080",
  headers: {
    app: "deviceApp",
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use(
  (res) => {
    console.log(res);
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);
export default axiosClient;
