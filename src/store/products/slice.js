import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  productDetails: null,
  reviews: [],
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
    reviewsFetchedSuccess: (state, action) => {
      state.reviews.push(action.payload);
      // [...state.reviews, ...action.payload];
    },
  },
});

export const {
  productsFetchedSuccess,
  productDetailsFetchedSuccess,
  reviewsFetchedSuccess,
} = productSlice.actions;

export default productSlice.reducer;
