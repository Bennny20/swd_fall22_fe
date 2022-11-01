/* eslint-disable prettier/prettier */

import axiosClient from "api/axiosClient";

// api/projectApi.js
const projectApi = {
  
  getAllProjectType: (params) => {
    const url = "/project-types";
    return axiosClient.get(url, { params });
  },

  getAll: (params) => {
    const url = "/projects";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/projects/${id}`;
    return axiosClient.get(url);
  },
 
  getByUserID: (params) => {
    const url = "/projects/user";
    return axiosClient.get(url, { params });
  },
};
export default projectApi;


