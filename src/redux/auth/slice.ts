import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import {
  register,
  login,
  logout,
  refreshUser,
  uploadImage,
  updateUsername,
} from "./operations";

export interface authIntitialStateType {
  user: {
    id: string | null | undefined;
    username: string | null;
    email: string | null;
    thumb: string | undefined;
  };
  token: string | null;
  isRefreshing: boolean;
  isLoggedIn: boolean;
  error: any;
}

const handlePending = (state: authIntitialStateType) => {
  state.error = null;
};

const handleRejected = (state: authIntitialStateType, action: any) => {
  state.error = action.payload;
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
    thumb: undefined,
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
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state: authIntitialStateType, action) => {
        state.user.email = action.payload.user.email;
        state.user.id = action.payload.user.id;
        state.user.username = action.payload.user.username;
        state.user.thumb = action.payload.user.thumb;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
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
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(
        refreshUser.fulfilled,
        (state: authIntitialStateType, action) => {
          state.user.email = action.payload.email;
          state.user.id = action.payload.id;
          state.user.username = action.payload.name;
          state.token = action.payload.token;
          state.user.thumb = action.payload.thumb;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.error = null;
        }
      )
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logout.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(register.pending, handlePending)
      .addCase(uploadImage.pending, handlePending)
      .addCase(
        uploadImage.fulfilled,
        (state: authIntitialStateType, action) => {
          state.user.thumb = action.payload;
          state.isRefreshing = false;
          state.error = null;
        }
      )
      .addCase(uploadImage.rejected, handleRejected)
      .addCase(updateUsername.pending, handlePending)
      .addCase(
        updateUsername.fulfilled,
        (state: authIntitialStateType, action) => {
          state.user.username = action.payload;
          state.isRefreshing = false;
          state.error = null;
        }
      )
      .addCase(updateUsername.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
