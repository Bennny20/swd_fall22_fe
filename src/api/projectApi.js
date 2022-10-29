/* eslint-disable prettier/prettier */

import axiosClient from "api/axiosClient";

// api/projectApi.js
const projectApi = {
  getAll: (params) => {
    const url = "/projects";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/projects/${id}`;
    return axiosClient.get(url);
  },
};
export default projectApi;
