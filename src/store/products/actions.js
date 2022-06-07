import axios from "axios";

import { productsFetchedSuccess } from "./slice";

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const apiUrl = `http://localhost:4000/products`;
      const response = await axios.get(`${apiUrl}/`);
      dispatch(productsFetchedSuccess(response.data));
      console.log("from fetchProd thunk", response.data);
      // server sends "allProducts"
    } catch (e) {
      console.log(e.message);
    }
  };
};
