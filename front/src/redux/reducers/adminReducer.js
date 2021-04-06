import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllAdminsUsers = createAsyncThunk("GETALLADMINSUSERS", () => {
  return axios
    .get("/api/admin/users")
    .then((res) => res.data)
});

export const editAdminUser = createAsyncThunk("EDITADMINUSER", (adminId) => {
  return axios
    .put(`api/admin/users/${adminId}`)
    .then((res) => res.data)
});

export const deleteAdmin = createAsyncThunk("DELETEADMIN", (adminId) => {
  return axios
    .delete(`/api/admin/users/${adminId}`)
    .then((res) => res.data)
});

/* export const logoutAdmin = createAsyncThunk("LOGOUTADMIN", () => {
    return axios
      .post(`/api/admin/logout`)
      .then((res) => res.data)

    }); */

    
    export const addAdminProduct = createAsyncThunk(
      "ADDADMINPRODUCT",
      ({name, price, origin, flavour, img, description, category}) => {
        return axios
        .post(`/api/admin/products` ,{
          name,
          price,
          origin,
          flavour,
          img,
          description,
          category
        })
        .then((res) => res.data)
      }
      );
      
      export const editAdminProduct = createAsyncThunk("EDITADMINPRODUCT", (
        productId , {name, price, origin, flavour, img, description, category}
) => {
  return axios
  .put(`/api/admin/products/${productId}`, {
    name,
    price,
    origin,
    flavour,
    img,
    description,
    category
  } )
  .then((res) => res.data)
});

export const deleteAdminProduct = createAsyncThunk(
  "DELETEADMINPRODUCT",
  (productId) => {
    return axios
    .delete(`/api/admin/products/${productId}`)
    .then((res) => res.data)
  }
  
  );
  
  export const adminUserReducer = createReducer(
    {},
    {
      [editAdminUser.fulfilled]: (state, action) => action.payload,
      [deleteAdmin.fulfilled]: (state, action) => action.payload,
      //[logoutAdmin.fulfilled]: (state, action) => action.payload,
    }
    );
    
    export const allAdminUserReducer = createReducer([], {
      [getAllAdminsUsers.fulfilled]: (state, action) => action.payload,
    });
    
    export const getAllAdminProducts = createAsyncThunk(
      "GETALLADMINPRODUCT",
      () => {
        return axios
          .get('/api/admin/products')
          .then((res) => res.data)
        }
    );
export const getAllAdminProductsReducer = createReducer([], {
  [getAllAdminProducts.fulfilled]: (state, action) => action.payload,
});

export const singleAdminProductReducer = createReducer(
  {},
  {
    [addAdminProduct.fulfilled]: (state, action) => action.payload,
    [editAdminProduct.fulfilled]: (state, action) => action.payload,
    [deleteAdminProduct.fulfilled]: (state, action) => action.payload,
  }
);

export const getAllOrders = createAsyncThunk(
  "GETALLORDERS",
  () => {
    return axios
      .get(`/api/admin/purchases`)
      .then((res) => res.data)
    }

);
export const getAllOrdersReducer = createReducer(
  [],
  {
   
    [getAllOrders.fulfilled]: (state, action) => action.payload,
  }
);