import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  serverItemLoading: false,
  serverItemHasErrors: false,
  serverItem: [],
};

const serverItemSlice = createSlice({
  name: "serverItem",
  initialState,
  reducers: {
    getServerItem: (state) => {
      state.serverItemLoading = true;
    },
    getServerItemSuccess: (state, { payload }) => {
      state.serverItem = payload;
      state.serverItemLoading = false;
      state.serverItemHasErrors = false;
    },
    getServerItemFailure: (state) => {
      state.serverItemLoading = false;
      state.serverItemHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.serverItem,
      });
    });
  },
});

export const { getServerItem, getServerItemSuccess, getServerItemFailure } =
  serverItemSlice.actions;

export const serverItemSelector = (state) => state.serverItem;

export default serverItemSlice.reducer;

// Asynchronous thunk action
export function fetchServerItem(params = null) {
  return async (dispatch) => {
    dispatch(getServerItem());
    try {
      const response = await api.getServer();
      dispatch(getServerItemSuccess(response?.data?.return));
    } catch (error) {
      dispatch(getServerItemFailure());
    }
  };
}
