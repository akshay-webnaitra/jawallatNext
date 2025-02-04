import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";
import { toast } from "react-toastify";

const api = Api.create();
export const initialState = {
  sourcesLoading: false,
  sourcesHasErrors: false,
  sources: [],
  main_categories: [],
  filterSources: [],
  userCategories: [],
  tags: [],
  filtered_sources: [],
  user_topics: [],
  user_categories: [],
  changePasswordLoading: false,
  changePasswordHasErrors: false,
  categoryUserLoading: false,
  categoryUserHasErrors: false,
  notificationDataLoading: false,
  notificationDataErrors: false,
  tagUserLoading: false,
  tagUserHasErrors: false,
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
    getNotificationData: (state) => {
      state.notificationDataLoading = true;
    },
    getNotificationDataSuccess: (state, { payload }) => {
      state.main_categories = payload?.main_categories;
      state.filtered_sources = payload?.filtered_sources;
      state.tags = payload?.tags;
      state.user_topics = payload?.user_topics || [];
      state.user_categories = payload?.user_categories || [];
      state.notificationDataLoading = false;
      state.notificationDataErrors = false;
    },
    getNotificationDataFailure: (state) => {
      state.notificationDataLoading = false;
      state.notificationDataErrors = true;
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
    setCategoryUser: (state) => {
      state.categoryUserLoading = true;
      state.categoryUserHasErrors = false;
    },
    setCategoryUserSuccess: (state, { payload }) => {
      state.categoryUserLoading = false;
      state.categoryUserHasErrors = false;
      state.userCategories = payload.categories || [];
    },
    setCategoryUserFailure: (state) => {
      state.categoryUserLoading = false;
      state.categoryUserHasErrors = true;
    },
    setTagUser: (state) => {
      state.tagUserLoading = true;
      state.tagUserHasErrors = false;
    },
    setTagUserSuccess: (state, { payload }) => {
      state.tagUserLoading = false;
      state.tagUserHasErrors = false;
      state.userCategories = payload || [];
    },
    setTagUserFailure: (state) => {
      state.tagUserLoading = false;
      state.tagUserHasErrors = true;
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
  setCategoryUser,
  setCategoryUserSuccess,
  setCategoryUserFailure,
  getNotificationData,
  setTagUser,
  setTagUserFailure,
  setTagUserSuccess,
  getNotificationDataSuccess,
  getNotificationDataFailure,
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
      const response = await api.getSettingsObject(params);
      dispatch(getNotificationSourcesSuccess(response?.data));
    } catch (error) {
      dispatch(getNotificationSourcesFailure());
    }
  };
}

//Asynchronous thunk action
export function fetchNotificationData(countrySlug = "", categorySlug = "") {
  return async (dispatch) => {
    dispatch(getNotificationData());
    try {
      const params = {};
      if (countrySlug) {
        params.country_slug = countrySlug;
      }
      if (categorySlug) {
        params.category_slug = categorySlug;
      }
      const response = await api.getSettingsObject(params);
      dispatch(getNotificationDataSuccess(response?.data));
    } catch (error) {
      dispatch(getNotificationDataFailure());
    }
  };
}

export function changePassword(params) {
  return async (dispatch) => {
    dispatch(setChangePassword());
    try {
      const response = await api.changePassword(params);
      dispatch(setChangePasswordSuccess(response?.data));
      if (response?.data?.status === 200) {
        toast.success(response?.data?.message);
        window.location.reload();
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      dispatch(setChangePasswordFailure());
    }
  };
}

export function addCategoryToUser(user_id, cat_id) {
  return async (dispatch) => {
    dispatch(setCategoryUser());
    try {
      const response = await api.addCategoryToUser({ user_id, cat_id });

      dispatch(setCategoryUserSuccess(response?.data));
      if (response?.status === 200) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      dispatch(setCategoryUserFailure());
      toast.error("Failed to add category to user");
    }
  };
}

export function addUserTopic(user_id, keyword_id) {
  return async (dispatch) => {
    dispatch(setTagUser());
    try {
      const response = await api.addUserTopic({ user_id, keyword_id });
      dispatch(setTagUserSuccess(response?.data));
      if (response?.status === 200) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      dispatch(setTagUserFailure());
      toast.error("Failed to add category to user");
    }
  };
}

export function deleteUserTopic(user_id, keyword_id) {
  return async (dispatch) => {
    dispatch(setTagUser());
    try {
      const response = await api.detachUserRelation({ user_id, keyword_id });
      dispatch(setTagUserSuccess(response?.data));
      if (response?.status === 200) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      dispatch(setTagUserFailure());
      toast.error("Failed to add category to user");
    }
  };
}
