import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  productDetails: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetchedSuccess: (state, action) => {
      state.allProducts = [...state.allProducts, ...action.payload];
    },
    productDetailsFetchedSuccess: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { productsFetchedSuccess, productDetailsFetchedSuccess } =
  productSlice.actions;

export default productSlice.reducer;
