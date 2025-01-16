import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();

export const initialState = {
  videosLoading: false,
  videosHasErrors: false,
  category: null,
  videos: [],
  lastPage: 0,
  videosItemsLoading: false,
  related_videos: [],
  videosItemsHasErrors: false,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    getVideos: (state) => {
      state.videosLoading = true;
    },
    getVideosSuccess: (state, { payload }) => {
      state.videos = payload?.videos?.data || [];
      state.category = payload?.category || [];
      state.videosLoading = false;
      state.videosHasErrors = false;
      state.lastPage = payload?.videos?.last_page || 1;
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

export const {
  getVideos,
  getVideosSuccess,
  getVideosFailure,
  getVideosItems,
  getVideosItemsSuccess,
  getVideosItemsFailure,
} = videosSlice.actions;

export const videosSelector = (state) => state.videos;

export default videosSlice.reducer;

// Asynchronous thunk action to fetch videos
export function fetchVideos({ category = "" }) {
  return async (dispatch) => {
    dispatch(getVideos());
    try {
      // if (!!session) {
      //   api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
      // }
      const response = await api.getVideoPage({ category });
      if (response?.data) {
        dispatch(getVideosSuccess(response?.data?.return ?? response?.data));
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
