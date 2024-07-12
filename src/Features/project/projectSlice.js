import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./projectService";

// Initial state
const initialState = {
  projects: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Async thunks for fetching, creating, updating, and deleting projects
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, thunkAPI) => {
    try {
      const projects = await projectService.getAllProjects();
      return projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductForProjectSelect = createAsyncThunk(
  "projects/getProductForProjectSelect",
  async (projectId, thunkAPI) => {
    try {
      const products = await projectService.getProductForProjectSelect(projectId);
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewProject = createAsyncThunk(
  "projects/createNewProject",
  async (projectData, thunkAPI) => {
    try {
      const newProject = await projectService.createProject(projectData);
      return newProject;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateExistingProject = createAsyncThunk(
  "projects/updateExistingProject",
  async ({ projectId, projectData }, thunkAPI) => {
    try {
      const updatedProject = await projectService.updateProject(projectId, projectData);
      return updatedProject;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProjectById = createAsyncThunk(
  "projects/getProjectById",
  async (projectId, thunkAPI) => {
    try {
      const project = await projectService.getProjectById(projectId);
      return project;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteExistingProject = createAsyncThunk(
  "projects/deleteExistingProject",
  async (projectId, thunkAPI) => {
    try {
      await projectService.deleteProject(projectId);
      return projectId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create slice
export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch projects";
      })
      .addCase(getProductForProjectSelect.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getProductForProjectSelect.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProductForProjectSelect.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch products";
      })
      .addCase(createNewProject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(createNewProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects.push(action.payload);
        state.message = "Project created successfully!";
      })
      .addCase(createNewProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to create project";
      })
      .addCase(updateExistingProject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(updateExistingProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const updatedIndex = state.projects.findIndex(proj => proj.id === action.payload.id);
        if (updatedIndex !== -1) {
          state.projects[updatedIndex] = action.payload;
        }
        state.message = "Project updated successfully!";
      })
      .addCase(updateExistingProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to update project";
      })
      .addCase(getProjectById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const project = action.payload;
        const existingProject = state.projects.find(proj => proj.id === project.id);
        if (existingProject) {
          const updatedIndex = state.projects.findIndex(proj => proj.id === project.id);
          state.projects[updatedIndex] = project;
        } else {
          state.projects.push(project);
        }
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch project";
      })
      .addCase(deleteExistingProject.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(deleteExistingProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = state.projects.filter(proj => proj.id !== action.payload);
        state.message = "Project deleted successfully!";
      })
      .addCase(deleteExistingProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to delete project";
      });
  },
});


export const selectAllProjects = (state) => state.projects.projects;
export const selectProjectById = (state, projectId) => state.projects.projects.find(proj => proj.id === projectId);

export default projectSlice.reducer;
