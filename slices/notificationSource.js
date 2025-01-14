import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";
import { toast } from "react-toastify";

const api = Api.create();
export const initialState = {
  sourcesLoading: false,
  sourcesHasErrors: false,
  sources: [],
  filterSources: [],
  changePasswordLoading: false,
  changePasswordHasErrors: false,
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
    setChangePassword: (state) => {
      state.changePasswordLoading = true;
      state.changePasswordHasErrors = false;
    },
    setChangePasswordSuccess: (state) => {
      state.changePasswordLoading = false;
      state.changePasswordHasErrors = false;
    },
    setChangePasswordFailure: (state) => {
      state.changePasswordLoading = false;
      state.changePasswordHasErrors = true;
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
  setChangePassword,
  setChangePasswordSuccess,
  setChangePasswordFailure,
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
        params.country_slug = countrySlug;
      }
      if (categorySlug) {
        params.category_slug = categorySlug;
      }
      const response = await api.filterSources(params);
      dispatch(getNotificationSourcesSuccess(response?.data));
    } catch (error) {
      dispatch(getNotificationSourcesFailure());
    }
  };
}

export function changePassword(params) {
  return async (dispatch) => {
    dispatch(setChangePassword());
    try {
      const response = await api.changePassword(params);
      console.log(response, "change");
      dispatch(setChangePasswordSuccess(response?.data));
      if (response?.data?.status === 200) {
        toast.success(response?.data?.message);
        window.location.reload();
      } else if (response?.data?.status === 400) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      dispatch(setChangePasswordFailure());
    }
  };
}
