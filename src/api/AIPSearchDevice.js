import axiosClient from "./axiosClient";

const AIPsearchDevice = {
  getSearch: (data) => {
    const url = "/api/v1.0/device";
    return axiosClient.post(url, { data });
  },
};
export default AIPsearchDevice;
