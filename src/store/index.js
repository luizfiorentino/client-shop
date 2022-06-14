import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/slice";
import shopCartReducer from "./shopCarts/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    products: productReducer,
    shopCarts: shopCartReducer,
    user: userReducer,
  },
});

export default store;
