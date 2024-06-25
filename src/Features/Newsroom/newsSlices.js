import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthNews from "./newsServices";
const initialState = {
  News: [],
  FeaturedP : [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const GetNews = createAsyncThunk(
  "product/get-News",
  async (thunkAPI) => {
    try {
      return await AuthNews.getNews();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetFeaturedProduct = createAsyncThunk(
    "product/get-Featured",
    async (thunkAPI) => {
      try {
        return await AuthNews.getFeaturedProduct();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const NewsSlice = createSlice({
  name: "News",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(GetNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetNews.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.News=action.payload
        state.message = "success";
      })
      .addCase(GetNews.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(GetFeaturedProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetFeaturedProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.FeaturedP=action.payload
        state.message = "success";
      })
      .addCase(GetFeaturedProduct.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
     ;
  },
});

export default NewsSlice.reducer;
