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

export const {
  setShowLogin,
  setShowRegister,
  setShowResetPassword,
  setResetPasswordStep,
} = settingSlice.actions;

export const settingSelector = (state) => state.setting;

export default settingSlice.reducer;
