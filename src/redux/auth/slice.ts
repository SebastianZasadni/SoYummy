import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { register, login, logout, refreshUser } from "./operations";

export interface authIntitialStateType {
  user: {
    id: number | null | undefined;
    username: string | null;
    email: string | null;
  };
  token: string | null;
  isRefreshing: boolean;
  isLoggedIn: boolean;
  error: any;
}

const handlePending = (state: authIntitialStateType) => {
  state.error = null;
  Notiflix.Loading.standard("Loading...");
};

const handleRejected = (state: authIntitialStateType, action: any) => {
  state.error = action.payload;
  Notiflix.Loading.remove();
};

const initialState: authIntitialStateType = {
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  token: null,
  user: {
    username: null,
    email: null,
    id: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state: authIntitialStateType) => {
        state.error = null;
        Notiflix.Loading.remove();
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state: authIntitialStateType, action) => {
        state.user.email = action.payload.user.email;
        state.user.id = action.payload.user.id;
        state.user.username = action.payload.user.username;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        Notiflix.Loading.remove();
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, (state: authIntitialStateType) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.token = null;
        state.user.email = null;
        state.user.id = null;
        state.user.username = null;
        Notiflix.Loading.remove();
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(
        refreshUser.fulfilled,
        (state: authIntitialStateType, action) => {
          state.user.email = action.payload.email;
          state.user.id = action.payload.id;
          state.user.username = action.payload.name;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.error = null;
          Notiflix.Loading.remove();
        }
      )
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        Notiflix.Loading.remove();
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        Notiflix.Loading.remove();
      })
      .addCase(logout.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(register.pending, handlePending);
  },
});

export const authReducer = authSlice.reducer;
