import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuMobile: false,
  isUserLogoModal: false,
  isUserInfoModal: false,
  isLogoutModal: false,
};

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsMenuMobile(state, action) {
      state.isMenuMobile = action.payload;
    },
    setIsUserLogoModal(state, action) {
      state.isUserLogoModal = action.payload;
    },
    setIsUserInfoModal(state, action) {
      state.isUserInfoModal = action.payload;
    },
    setIsLogoutModal(state, action) {
      state.isLogoutModal = action.payload;
    },
  },
});

export const {
  setIsMenuMobile,
  setIsUserLogoModal,
  setIsUserInfoModal,
  setIsLogoutModal,
} = slice.actions;

export const globalReducer = slice.reducer;
