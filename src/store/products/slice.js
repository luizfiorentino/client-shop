import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetchedSuccess: (state, action) => {
      state.allProducts = [...state.allProducts, ...action.payload];
    },
  },
});

export const { productsFetchedSuccess } = productSlice.actions;

export default productSlice.reducer;
