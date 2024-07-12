import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import wishlistServices from './wishlistService';

// Initial state
const initialState = {
  wishlists: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  upd:false,
  message: ''
};

// Thunks for async actions
export const createWishlist = createAsyncThunk('wishlist/create', async (data, thunkAPI) => {
  try {
    return await wishlistServices.createWishlist(data.userId, data.total);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getWishlistsByUser = createAsyncThunk('wishlist/getByUser', async (userId, thunkAPI) => {
  try {
    return await wishlistServices.getWishlistsByUser(userId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addProductToWishlist = createAsyncThunk('wishlist/addProduct', async (data, thunkAPI) => {
  try {
    return await wishlistServices.addProductToWishlist(data.userId, data.productId, data.quantity);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateProductQuantity = createAsyncThunk('wishlist/updateQuantity', async (data, thunkAPI) => {
  try {
    return await wishlistServices.updateProductQuantity(data.wishlistId,data.productId, data.quantity);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const removeProductFromWishlist = createAsyncThunk('wishlist/removeProduct', async (data, thunkAPI) => {
  try {
    return await wishlistServices.removeProductFromWishlist(data.wishlistId,data.productId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Slice
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlists.push(action.payload);
      })
      .addCase(createWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getWishlistsByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishlistsByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlists = action.payload;
      })
      .addCase(getWishlistsByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addProductToWishlist.pending, (state) => {
        state.isLoading = true;
        state.upd = false
      })
      .addCase(addProductToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.upd = true
        // Update the wishlist with the added product
       
      })
      .addCase(addProductToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProductQuantity.pending, (state) => {
        state.isLoading = true;
        state.upd = false
      })
      .addCase(updateProductQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.upd = true
        // Update the product quantity in the wishlist
        
      })
      .addCase(updateProductQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeProductFromWishlist.pending, (state) => {
        state.isLoading = true;
        state.upd = false
      })
      .addCase(removeProductFromWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.upd = true
        // Remove the product from the wishlist
       
      })
      .addCase(removeProductFromWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = wishlistSlice.actions;
export default wishlistSlice.reducer;
