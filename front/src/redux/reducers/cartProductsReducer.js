import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCartProducts = createAction("SETCARTPRODUCTS");

export const getCartProducts = createAsyncThunk("GET_CART_PRODUCTS", () => {
  return axios
    .get("/api/cart")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});


export const addToCartProducts = createAsyncThunk("ADDTOCART", (productId) => {
  return axios
    .post(`/api/cart/${productId}`) 
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const removeToCartProducts = createAsyncThunk('REMOVETOCART', (productId) => {
  return axios
  .post(`/api/cart/remove/${productId}`) 
  .then((res) => res.data)
  .catch((err) => console.log(err));
})

export const deleteCartProduct = createAsyncThunk('DELETE_CART_PRODUCT', (id)=>{
  return axios
  .delete(`/api/cart/${id}`)
  .then(res=>{
    return id
  })
  .catch(err=> console.log(err)) 
});

export const cartProductsReducer = createReducer({}, {
  [getCartProducts.fulfilled]: (state, action) => action.payload,
  [deleteCartProduct.fulfilled]: (state, action) => ({
   ...state,
    product: state.product.filter(item=>item.productId!=action.payload)
  }),
});

export const addToCartProductsReducer = createReducer([], {
  [getCartProducts.fulfilled]: (state, action) => action.payload,
  [addToCartProducts.fulfilled]: (state, action) => ({
    ...state,
     product: state.product.filter(item=>item.productId!=action.payload)
   }),
});

export const removeToCartProductsReducer = createReducer([], {
  [removeToCartProducts.fulfilled]: (state, action) => action.payload,
});






export const editCartProducts = createAsyncThunk("EDITTOCART", (productId) => {
  return axios
    .put(`/api/cart/${productId}`) 
    .then((res) => res.data)
    .catch((err) => console.log(err));
});
export const editCartProductsReducer = createReducer([], {
  [editCartProducts.fulfilled]: (state, action) => action.payload,
});





