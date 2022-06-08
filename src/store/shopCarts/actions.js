import { createNextState } from "@reduxjs/toolkit";
import axios from "axios";

import { shopCartsFetchedSuccess, newShopcartPosted } from "./slice";

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
