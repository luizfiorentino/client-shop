import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCarts: [],
};

export const shopCartSlice = createSlice({
  name: "shopCarts",
  initialState,
  reducers: {
    shopCartsFetchedSuccess: (state, action) => {
      state.allCarts = [...state.allCarts, ...action.payload];
    },
    newShopcartPosted: (state, action) => {
      state.allCarts.push(action.payload);
    },
  },
});

export const { shopCartsFetchedSuccess, newShopcartPosted } =
  shopCartSlice.actions;

export default shopCartSlice.reducer;
