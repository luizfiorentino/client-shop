import { createNextState } from "@reduxjs/toolkit";
import axios from "axios";

import {
  shopCartsFetchedSuccess,
  newShopcartPosted,
  itemDeleteSuccess,
} from "./slice";

const apiUrl = "http://localhost:4000/shopCarts";

export const fetchShopCarts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}`);
      dispatch(shopCartsFetchedSuccess(response.data.allCarts));
      console.log("from fetch shopCarts thunk", response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postNewCart = (productId, productName, price, userEmail) => {
  return async (dispatch, getState) => {
    try {
      const userEmail = getState().user.profile.email;
      console.log("thunk", userEmail);
      const response = await axios.post(`${apiUrl}`, {
        productId,
        productName,
        price,
        userEmail,
      });
      dispatch(newShopcartPosted(response.data));
      console.log("from thunk shopCart", response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const deleteItem = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(`${apiUrl}/${id}`);

      console.log("Item deleted", response.data);
      dispatch(itemDeleteSuccess(id));
    } catch (e) {
      console.error(e);
    }
  };
};
