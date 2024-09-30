import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  showLogin: false,
  showRegister: false,
  showResetPassword: false,
  resetPasswordStep: 1,
};

// A slice for setting with our three reducers
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setShowLogin: (state, { payload }) => {
      state.showLogin = payload;
    },
    setShowRegister: (state, { payload }) => {
      state.showRegister = payload;
    },
    setShowResetPassword: (state, { payload }) => {
      state.showResetPassword = payload;
    },
    setResetPasswordStep: (state, { payload }) => {
      state.resetPasswordStep = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.setting,
      });
    });
  },
});

// Three actions generated from the slice
export const {
  setShowLogin,
  setShowRegister,
  setShowResetPassword,
  setResetPasswordStep,
} = settingSlice.actions;

// A selector
export const settingSelector = (state) => state.setting;

// The reducer
export default settingSlice.reducer;
