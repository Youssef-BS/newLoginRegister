import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectProductService from "./projectProductService";

// Initial state
const initialState = {
  projectProducts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  selectedProject: null, 
};

// Async thunks for fetching, creating, updating, and deleting project products
export const fetchProjectProducts = createAsyncThunk(
  "projectProducts/fetchProjectProducts",
  async (_, thunkAPI) => {
    try {
      const projectProducts = await projectProductService.getAllProjectProducts();
      return projectProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProjectWithGalleriesAndProducts = createAsyncThunk(
  "projectProducts/fetchProjectWithGalleriesAndProducts",
  async (projectId, thunkAPI) => {
    try {
      const projectWithGalleriesAndProducts = await projectProductService.fetchProjectWithGalleriesAndProducts(projectId);
      return projectWithGalleriesAndProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewProjectProduct = createAsyncThunk(
  "projectProducts/createNewProjectProduct",
  async (projectProductData, thunkAPI) => {
    try {
      const newProjectProduct = await projectProductService.createProjectProduct(projectProductData);
      return newProjectProduct;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateExistingProjectProduct = createAsyncThunk(
  "projectProducts/updateExistingProjectProduct",
  async ({ projectProductId, projectProductData }, thunkAPI) => {
    try {
      const updatedProjectProduct = await projectProductService.updateProjectProduct(projectProductId, projectProductData);
      return updatedProjectProduct;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteExistingProjectProduct = createAsyncThunk(
  "projectProducts/deleteExistingProjectProduct",
  async (projectProductId, thunkAPI) => {
    try {
      await projectProductService.deleteProjectProduct(projectProductId);
      return projectProductId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create slice
export const projectProductSlice = createSlice({
  name: "projectProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(fetchProjectProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projectProducts = action.payload;
      })
      .addCase(fetchProjectProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch project products";
      })
      .addCase(createNewProjectProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(createNewProjectProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projectProducts.push(action.payload);
        state.message = "Project product created successfully!";
      })
      .addCase(createNewProjectProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to create project product";
      })
      .addCase(updateExistingProjectProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(updateExistingProjectProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const updatedIndex = state.projectProducts.findIndex(prod => prod.id === action.payload.id);
        if (updatedIndex !== -1) {
          state.projectProducts[updatedIndex] = action.payload;
        }
        state.message = "Project product updated successfully!";
      })
      .addCase(updateExistingProjectProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to update project product";
      })
      .addCase(deleteExistingProjectProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(deleteExistingProjectProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projectProducts = state.projectProducts.filter(prod => prod.id !== action.payload);
        state.message = "Project product deleted successfully!";
      })
      .addCase(deleteExistingProjectProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to delete project product";
      })
      .addCase(fetchProjectWithGalleriesAndProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(fetchProjectWithGalleriesAndProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.selectedProject = action.payload; // Update selected project state
      })
      .addCase(fetchProjectWithGalleriesAndProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch project with galleries and products";
      })
  },
});

// Selector to get all project products from state
export const selectAllProjectProducts = (state) => state.projectProducts.projectProducts;
export const selectSelectedProject = (state) => state.projectProducts.selectedProject;

// Export reducer as default
export default projectProductSlice.reducer;
