import axios from "axios";

import { productsFetchedSuccess, productDetailsFetchedSuccess } from "./slice";

const apiUrl = `http://localhost:4000/products`;

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/`);
      dispatch(productsFetchedSuccess(response.data));
      console.log("from fetchProd thunk", response.data);
      // server sends "allProducts"
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchProductDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`);
      console.log("from actions prod details", response);
      dispatch(productDetailsFetchedSuccess(response.data));
      console.log("sec from thunk prod det response.data", response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
};
