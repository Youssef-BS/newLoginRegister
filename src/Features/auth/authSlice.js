import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";
import Cookies from "js-cookie";

const initialState = {
  user: authService.getCurrentUser(),
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "/login",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "/register",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.register(userData);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "An error occurred";
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "An error occurred";
      });
  },
});

export const logout = createAsyncThunk("/logout", async (_, thunkAPI) => {
  try {
    Cookies.remove("user");
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const selectCurrentUser = (state) => state.auth.user;

export default authSlice.reducer;