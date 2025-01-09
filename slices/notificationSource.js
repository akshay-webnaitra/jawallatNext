import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  sourcesLoading: false,
  sourcesHasErrors: false,
  sources: [],
  filterSources: [],
};

const notificationSourcesSlice = createSlice({
  name: "notificationSources",
  initialState,
  reducers: {
    getNotificationSources: (state) => {
      state.sourcesLoading = true;
    },
    getNotificationSourcesSuccess: (state, { payload }) => {
      state.sources = payload;
      state.sourcesLoading = false;
      state.sourcesHasErrors = false;
    },
    getNotificationSourcesFailure: (state) => {
      state.sourcesLoading = false;
      state.sourcesHasErrors = true;
    },
    setFilterSources: (state, { payload }) => {
      state.filterSources = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.notificationSource,
      });
    });
  },
});

export const {
  getNotificationSources,
  getNotificationSourcesSuccess,
  getNotificationSourcesFailure,
  setFilterSources,
} = notificationSourcesSlice.actions;

export const notificationSourcesSelector = (state) => state.notificationSource;

export default notificationSourcesSlice.reducer;

//Asynchronous thunk action
export function fetchNotificationSources(countrySlug = "", categorySlug = "") {
  return async (dispatch) => {
    dispatch(getNotificationSources());
    try {
      const params = {};
      if (countrySlug) {
        params.country = countrySlug;
      }
      if (categorySlug) {
        params.category = categorySlug;
      }
      const response = await api.filterSources(params);
      console.log(response, "noti");

      dispatch(getNotificationSourcesSuccess(response?.data));
    } catch (error) {
      dispatch(getNotificationSourcesFailure());
    }
  };
}
