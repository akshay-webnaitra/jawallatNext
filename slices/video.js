import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();

export const initialState = {
  videosLoading: false,
  videosHasErrors: false,
  category: null,
  videos: [], // Store the list of videos
  lastPage: 0, // Keep track of the pagination
  videosItemsLoading: false,
  related_videos: [],
  videosItemsHasErrors: false,
};

// A slice for videos with reducers
const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload; // Set the category slug
    },
    getVideos: (state) => {
      state.videosLoading = true;
    },
    getVideosSuccess: (state, { payload }) => {
      state.videos = payload?.main_videos?.data || [];
      state.videosLoading = false;
      state.videosHasErrors = false;
      state.lastPage = payload?.main_videos?.last_page || 1;
    },
    getVideosFailure: (state) => {
      state.videosLoading = false;
      state.videosHasErrors = true;
    },
    getVideosItems: (state) => {
      state.videosItemsLoading = true;
      state.videosItemsHasErrors = false;
    },
    getVideosItemsSuccess: (state, { payload }) => {
      state.videos = payload?.main_videos?.data || [];
      state.videosItemsLoading = false;
      state.videosItemsHasErrors = false;
    },
    getVideosItemsFailure: (state) => {
      state.videosItemsLoading = false;
      state.videosItemsHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return {
        ...state,
        ...payload.videos,
      };
    });
  },
});

// Three actions generated from the slice
export const {
  getVideos,
  getVideosSuccess,
  getVideosFailure,
  getVideosItems,
  getVideosItemsSuccess,
  getVideosItemsFailure,
} = videosSlice.actions;

// A selector to get videos from state
export const videosSelector = (state) => state.videos;

// The reducer
export default videosSlice.reducer;

// Asynchronous thunk action to fetch videos
export function fetchVideos(categorySlug) {
  return async (dispatch) => {
    dispatch(getVideos());
    try {
      const response = await api.getVideoPage({ category: categorySlug });
      if (response?.data) {
        dispatch(getVideosSuccess(response?.data?.return));
      } else {
        dispatch(getVideosFailure());
      }
    } catch (error) {
      dispatch(getVideosFailure());
    }
  };
}

// Asynchronous thunk action to fetch videos with pagination
export function fetchVideosItems({ categorySlug, page = 1 }) {
  return async (dispatch) => {
    dispatch(getVideosItems());

    try {
      const response = await api.getVideoPage({ page, categorySlug });
      if (response?.data?.return?.main_videos?.data) {
        dispatch(getVideosItemsSuccess(response?.data?.return));
      } else {
        dispatch(getVideosItemsFailure());
      }
    } catch (error) {
      dispatch(getVideosItemsFailure());
    }
  };
}
