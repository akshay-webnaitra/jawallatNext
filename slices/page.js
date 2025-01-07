import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  pageLoading: false,
  pageHasErrors: false,
  page_name: null,
  page_content: null,
  page_slug: null,
  imageUrl: null,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    getPage: (state) => {
      state.pageLoading = true;
      state.page_name = null;
      state.page_content = null;
      state.page_slug = null;
      state.imageUrl = null;
    },
    getPageSuccess: (state, { payload }) => {
      state.page_name = payload?.page_name;
      state.page_content = payload?.page_content;
      state.page_slug = payload?.page_slug;
      state.imageUrl = payload?.imageUrl;
      state.page = payload;
      state.pageLoading = false;
      state.pageHasErrors = false;
    },
    getPageFailure: (state) => {
      state.page_name = null;
      state.page_content = null;
      state.page_slug = null;
      state.imageUrl = null;
      state.pageLoading = false;
      state.pageHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.page,
      });
    });
  },
});

export const { getPage, getPageSuccess, getPageFailure } = pageSlice.actions;

export const pageSelector = (state) => state.page;

export default pageSlice.reducer;

//Asynchronous thunk action
export function fetchPage(params) {
  return async (dispatch) => {
    dispatch(getPage());

    try {
      const response = await api.getPage(params);
      dispatch(getPageSuccess(response?.data?.return));
    } catch (error) {
      dispatch(getPageFailure());
    }
  };
}
