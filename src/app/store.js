import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/Product/ProductSlice"
import newsReducer from '../Features/Newsroom/newsSlices'
import authSliceReducer from "../Features/auth/authSlice";
import userReducer from "../Features/users/userSlice";
import projectReducer from "../Features/project/projectSlice";
import cartSliceReducer from '../Features/cart/cartSlice'
import wshlistSliceReducer from '../Features/wishlist/wishlistSlice'
import projectProductReducer from "../Features/projectProduct/projectProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    news: newsReducer,
    auth : authSliceReducer ,
    user : userReducer ,
    projects: projectReducer,
    wishlist : wshlistSliceReducer,
    cart : cartSliceReducer,
    projectProduct : projectProductReducer

  },
});
