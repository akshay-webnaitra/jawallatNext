import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";
import { toast } from "react-toastify";

const api = Api.create();
export const initialState = {
  loading: false,
  hasError: false,
  errorMessage: "",
  user: {},
};

// A slice for auth with our three reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    postLoginRequest: (state) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = {};
    },
    postLoginSuccess: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = { payload };
    },
    postLoginFailure: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = payload;
      state.user = {};
    },
    postSignupRequest: (state) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = {};
    },
    postSignupSuccess: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = payload;
    },
    postSignupFailure: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = payload;
      state.user = {};
    },
    postForgotPasswordRequest: (state) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = {};
    },
    postForgotPasswordSuccess: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = payload;
    },
    postForgotPasswordFailure: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = payload;
      state.user = {};
    },
    postResetPasswordRequest: (state) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = {};
    },
    postResetPasswordSuccess: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.user = payload;
    },
    postResetPasswordFailure: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = payload;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.auth,
      });
    });
  },
});

// Three actions generated from the slice
export const {
  postLoginRequest,
  postLoginSuccess,
  postLoginFailure,
  postSignupRequest,
  postSignupSuccess,
  postSignupFailure,
  postForgotPasswordRequest,
  postForgotPasswordSuccess,
  postForgotPasswordFailure,
  postResetPasswordRequest,
  postResetPasswordSuccess,
  postResetPasswordFailure,
} = authSlice.actions;

// A selector
export const authSelector = (state) => state.auth;

// The reducer
export default authSlice.reducer;

export function postLogin(
  params,
  callback = () => {},
  errorCallback = () => {}
) {
  return async (dispatch) => {
    dispatch(postLoginRequest());

    try {
      const response = await api.login(params);

      if (response?.data?.status == 200) {
        dispatch(postLoginSuccess(response?.data?.return));
        toast.success(response?.data?.message);
        callback(response?.data?.return);
      } else {
        dispatch(postLoginFailure(response?.data?.message));
        toast.error(response?.data?.message);
        errorCallback();
      }
    } catch (error) {
      dispatch(postLoginFailure(error));
      toast.error("Something went wrong");
    }
  };
}

export function postSignup(params, callback = () => {}) {
  return async (dispatch) => {
    dispatch(postSignupRequest());
    try {
      const response = await api.signup(params);
      dispatch(postSignupSuccess(response?.data?.return));
      callback(response?.data?.return);
    } catch (error) {
      dispatch(postSignupFailure(error));
    }
  };
}

export function postForgotPassword(params, callback = () => {}) {
  return async (dispatch) => {
    dispatch(postForgotPasswordRequest());
    try {
      const response = await api.login(params);
      dispatch(postForgotPasswordSuccess(response?.data?.return));
      callback(response?.data?.return);
    } catch (error) {
      dispatch(postForgotPasswordFailure(error));
    }
  };
}

export function postResetPassword(params, callback = () => {}) {
  return async (dispatch) => {
    dispatch(postResetPasswordRequest());
    try {
      const response = await api.login(params);
      dispatch(postResetPasswordSuccess(response?.data?.return));
      callback(response?.data?.return);
    } catch (error) {
      dispatch(postResetPasswordFailure(error));
    }
  };
}
