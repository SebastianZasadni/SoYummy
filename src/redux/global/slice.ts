import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuMobile: false,
};

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsMenuMobile(state, action) {
      state.isMenuMobile = action.payload;
    },
  },
});

export const { setIsMenuMobile } = slice.actions;

export const globalReducer = slice.reducer;
