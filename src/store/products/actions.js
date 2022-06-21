import axios from "axios";

import {
  productsFetchedSuccess,
  productDetailsFetchedSuccess,
  reviewsFetchedSuccess,
} from "./slice";

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

export const fetchReviews = () => {
  return async (dispatch, useState) => {
    try {
      const response = await axios.get(`${apiUrl}/reviews/all`);
      dispatch(reviewsFetchedSuccess(response.data.allReviews));
      console.log("fetchRev thunk", response.data);
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
      dispatch(productDetailsFetchedSuccess(response.data.thisProduct));
      console.log(
        "sec from thunk prod det response.data",
        response.data.thisProduct
      );
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const postReview = (userReview, prodId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/reviews/${prodId}`, {
        userReview,
      });
      dispatch(reviewsFetchedSuccess(response.data.newReview));
    } catch (e) {
      console.log(e);
    }
  };
};
