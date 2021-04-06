import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "CREATEUSER",
  ({ firstname, lastname, age, email, password, address }) => {
    return axios
      .post("/api/user/register", {
        firstname,
        lastname,
        age,
        email,
        password,
        address
      })

      .then((user) => user)

  }
);


export const loginUser = createAsyncThunk("LOGINUSER", ({ email, password }) => {
  return axios
    .post("/api/user/login", { email, password })
    .then((usuario) => usuario.data)
    .catch(err => {
      return { error: 'error 404' }
    })
});

export const logOut = createAsyncThunk("LOGOUTUSER", () => {
  return axios
    .post("/api/user/logout")
    .then((user) => user)
});

export const me = createAsyncThunk("MEUSER", () => {
  return axios
    .get("/api/user/me")
    .then((user) => user)
});

export const getUserId = createAsyncThunk("IDUSER", (userid) => {
  return axios
    .put(`/api/user/${userid}`)
    .then((user) => user)
});

export const userReducer = createReducer(
  {},
  {
    [createUser.fulfilled]: (state, action) => action.payload,
    [loginUser.fulfilled]: (state, action) => action.payload,
    [logOut.fulfilled]: (state, action) => action.payload,
    [me.fulfilled]: (state, action) => action.payload,
    [getUserId.fulfilled]: (state, action) => action.payload,
  }
);
