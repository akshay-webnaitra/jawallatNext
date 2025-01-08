import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";
import { toast } from "react-toastify";

const api = Api.create();
export const initialState = {
  loading: false,
  hasError: false,
  errorMessage: "",
  data: {},
};

// A slice for auth with our three reducers
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    postContactRequest: (state) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.data = {};
    },
    postContactSuccess: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = "";
      state.data = payload;
    },
    postContactFailure: (state, { payload }) => {
      state.loading = true;
      state.hasError = false;
      state.errorMessage = payload;
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.contact,
      });
    });
  },
});

// Three actions generated from the slice
export const { postContactRequest, postContactSuccess, postContactFailure } =
  contactSlice.actions;

// A selector
export const contactSelector = (state) => state.contact;

// The reducer
export default contactSlice.reducer;

export function contactUs(
  params,
  callback = () => {},
  errorCallback = () => {}
) {
  return async (dispatch) => {
    dispatch(postContactRequest());

    try {
      const response = await api.Contactus(params);
      if (response?.data?.status == 200) {
        dispatch(postContactSuccess(response?.data?.return));
        toast.success(response?.data?.message);
        callback(response?.data?.return);
      } else {
        dispatch(postContactFailure(response?.data?.message));
        toast.error(response?.data?.message);
        errorCallback();
      }
    } catch (error) {
      dispatch(postContactFailure(error));
      toast.error("Something went wrong");
    }
  };
}
