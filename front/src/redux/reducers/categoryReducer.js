import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk("GET_CATEGORIES", () => {
  return axios

    .get("/api/categories")
    .then((r) => r.data)
    .catch((err) => console.log(err));

});

export const getCategoryByName= createAsyncThunk("GET_CATEGORY", (categoryName) => {
  return axios
    .get(`/api/categories/${categoryName}`)
    .then((product) => product)
    .catch((err) => console.log(err));

});

export const categoriesReducer = createReducer([], {
  [getCategories.fulfilled]: (state, action) => action.payload,
});

export const singleCategoryReducer = createReducer(
  {},
  {
    [getCategoryByName.fulfilled]: (state, action) => action.payload,
  }
);
