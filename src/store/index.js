import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/slice";
import shopCartReducer from "./shopCarts/slice";

const store = configureStore({
  reducer: {
    products: productReducer,
    shopCarts: shopCartReducer,
  },
});

export default store;
