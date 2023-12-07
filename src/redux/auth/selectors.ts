import { authIntitialStateType } from "./slice";

export const selectIsLoggedIn = (state: { auth: authIntitialStateType }) =>
  state.auth.isLoggedIn;

export const selectUser = (state: { auth: authIntitialStateType }) =>
  state.auth.user;

export const selectIsRefreshing = (state: { auth: authIntitialStateType }) =>
  state.auth.isRefreshing;
