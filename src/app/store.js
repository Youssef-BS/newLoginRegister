import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Product/ProductSlice"
import newsReducer from '../Features/Newsroom/newsSlices'
import authSliceReducer from "../Features/auth/authSlice";
import userReducer from "../Features/users/userSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    news: newsReducer,
    auth : authSliceReducer ,
    user : userReducer
    

  },
});
