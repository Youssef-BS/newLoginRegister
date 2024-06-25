import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthProduct from "./productServices";

const initialState = {
  Products: [],
  Markets : [],
  Search : [],
  Product:null,
  All : [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const GetAll = createAsyncThunk(
    "product/get-all",
    async(thunkAPI) => {
        try{ 
        return await AuthProduct.GetAll()
    }catch(error){
    return thunkAPI.rejectWithValue(error)

}}
)
export const GetProductById = createAsyncThunk(
  "product/get-pro",
  async(id,thunkAPI) => {
      try{ 
      return await AuthProduct.GetProductById(id)
  }catch(error){
  return thunkAPI.rejectWithValue(error)

}}
)
export const Search = createAsyncThunk(
  "product/search-pro",
  async(query,thunkAPI) => {
      try{ 
      return await AuthProduct.Search(query)
  }catch(error){
  return thunkAPI.rejectWithValue(error)

}}
)

export const GetMarkets = createAsyncThunk(
  "product/get-all-Product-market",
  async(thunkAPI) => {
      try{ 
      return await AuthProduct.GetMarkets()
  }catch(error){
  return thunkAPI.rejectWithValue(error)

}}
)
export const GetAllProducts = createAsyncThunk(
  "product/get-Products",
  async (thunkAPI) => {
    try {
      return await AuthProduct.GetAllProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ProductSlice = createSlice({
  name: "Product",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(GetAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAll.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.All = action.payload;
        state.message = "success";
      })
      .addCase(GetAll.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(GetAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.Products = action.payload;
        state.message = "success";
      })
      .addCase(GetAllProducts.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(GetMarkets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetMarkets.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.Markets = action.payload;
        state.message = "success";
      })
      .addCase(GetMarkets.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(GetProductById.pending, (state) => {
        state.isLoading = true;
        state.Product= null
      })
      .addCase(GetProductById.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.Product = action.payload;
        state.message = "success";
      })
      .addCase(GetProductById.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      }) .addCase(Search.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Search.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.Search = action.payload;
        state.message = "success";
      })
      .addCase(Search.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      
      
     ;
  },
});

export default ProductSlice.reducer;
