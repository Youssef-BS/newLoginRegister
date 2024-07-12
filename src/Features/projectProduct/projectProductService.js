import axios from "axios";
import { url_project_product } from "../../utils/baseUrl";

const getAllProjectProducts = async () => {
  try {
    const response = await axios.get(`${url_project_product}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch project products");
  }
};

const fetchProjectWithGalleriesAndProducts = async (projectId) => {
  try {
    const response = await axios.get(`${url_project_product}/projectbyId/${projectId}`);
    return response.data;
    
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch project with galleries and products");
  }
  
};

const createProjectProduct = async (projectProductData) => {
  try {
    const response = await axios.post(`${url_project_product}`, projectProductData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create project product");
  }
};

const updateProjectProduct = async (projectProductId, projectProductData) => {
  try {
    const response = await axios.put(`${url_project_product}/${projectProductId}`, projectProductData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update project product");
  }
};

const deleteProjectProduct = async (projectProductId) => {
  try {
    const response = await axios.delete(`${url_project_product}/${projectProductId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete project product");
  }
};

const projectProductService = {
  getAllProjectProducts,
  fetchProjectWithGalleriesAndProducts,
  createProjectProduct,
  updateProjectProduct,
  deleteProjectProduct,
};

export default projectProductService;
