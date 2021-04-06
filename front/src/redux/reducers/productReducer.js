import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("GETPRODUCTS", () => {
  return axios

    .get("/api/products/all")
    .then((r) => r.data)
    .catch((err) => console.log(err));
});

export const getProductId = createAsyncThunk("PRODUCTID", (productId) => {
  return axios
    .get(`/api/products/${productId}`)
    .then((product) => product.data)
    .catch((err) => console.log(err));
});
export const getProductName = createAsyncThunk("PRODUCTNAME", (name) => {
  return axios
    .get(`/api/products/?name=${name}`)
    .then((product) => product.data);
  // .catch((err) => console.log(err));
});

export const productsReducer = createReducer([], {
  [getProduct.fulfilled]: (state, action) => action.payload,
});

export const productReducer = createReducer(
  {},
  {
    [getProductId.fulfilled]: (state, action) => action.payload,
  }
);

export const productsNameReducer = createReducer([], {
  [getProductName.fulfilled]: (state, action) => action.payload,
});

export const getCheckout = createAsyncThunk("GETCHECKOUT", (id) => {
  return axios
    .put(`/api/checkout/confirmCheckout`, {id})
    .then((product) => console.log(product.data))
    .catch((err) => console.log(err));
});

export const getCheckoutReducer = createReducer(
  {},
  {
    [getCheckout.fulfilled]: (state, action) => action.payload,
  }
);


export const getPurchases = createAsyncThunk("GETPURCHASES", () => {
  return axios
    .get(`/api/user/me/purchases`)
    .then((product) => product.data)
    .catch((err) => console.log(err));
});
export const getPurchasesReducer = createReducer([], {
  [getPurchases.fulfilled]: (state, action) => action.payload,
});
