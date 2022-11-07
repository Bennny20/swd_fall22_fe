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

  getProjectByID: (id) => {
    const url = `/project/${id}`;
    return axiosClient.get(url);
  },

  getByUserID: (params) => {
    const url = "/projects/user";
    return axiosClient.get(url, { params });
  },

  //API PROJECT ITEM
  //getByProjetID
  getProjectItemByID: (params) => {
    const url = `/project-items`;
    return axiosClient.get(url, { params });
  },

  //getByProjetIemID
  getProjecItemtByID: (id) => {
    const url = `/project-item/${id}`;
    return axiosClient.get(url);
  },

  // API user
  getUserByID: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  //API Major
  getAllMajor: (params) => {
    const url = "/majors?";
    return axiosClient.get(url, { params });
  },

  //getByProjetIemID
  getProjecTypeByID: (id) => {
    const url = `/project-type/${id}`;
    return axiosClient.get(url);
  },
};
export default projectApi;
