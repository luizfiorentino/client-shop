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
    itemDeleteSuccess: (state, action) => {
      const itemId = action.payload;
      state.allCarts = state.allCarts.filter((s) => s.id !== itemId);
    },
  },
});

export const { shopCartsFetchedSuccess, newShopcartPosted, itemDeleteSuccess } =
  shopCartSlice.actions;

export default shopCartSlice.reducer;
