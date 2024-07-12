import axios from "axios";
import { url_project } from "../../utils/baseUrl";

const getAllProjects = async () => {
  try {
    const response = await axios.get(`${url_project}/getAllProject`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch projects");
  }
};

const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${url_project}/create`, projectData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create project");
  }
};

const getProductForProjectSelect = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/projectsProduct/getProductforProjectSelect`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch products");
  }
}


const getProjectById = async (projectId) => {
    try {
      const response = await axios.get(`${url_project}/${projectId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to get project");
    }
  
};


const updateProject = async (projectId, projectData) => {
  try {
    const response = await axios.put(`${url_project}/${projectId}`, projectData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update project");
  }
};

const deleteProject = async (projectId) => {
  try {
    const response = await axios.delete(`${url_project}/${projectId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete project");
  }
};

const projectService = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById ,
  getProductForProjectSelect
};

export default projectService;
