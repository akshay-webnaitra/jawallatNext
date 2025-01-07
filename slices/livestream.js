import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();

export const initialState = {
  selectedVideo: null,
  videoLoading: false,
  videoError: false,
  videoDetails: null,
  videos: [],
};
const liveStreamSlice = createSlice({
  name: "liveStream",
  initialState,
  reducers: {
    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
    setVideoLoading: (state) => {
      state.videoLoading = true;
      state.videoError = false;
    },
    setVideoSuccess: (state, action) => {
      state.videoDetails = action.payload;
      state.videoLoading = false;
      state.videoError = false;
    },
    setVideoFailure: (state) => {
      state.videoLoading = false;
      state.videoError = true;
    },
    setVideos: (state, action) => {
      state.videos = action?.payload?.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return {
        ...state,
        ...payload.live,
      };
    });
  },
});

export const {
  setSelectedVideo,
  setVideoLoading,
  setVideoSuccess,
  setVideoFailure,
  setVideos,
} = liveStreamSlice.actions;

export const liveStreamSelector = (state) => state.live;

export default liveStreamSlice.reducer;

// Async thunk action
export function fetchLiveStreamVideos(country = "") {
  return async (dispatch) => {
    dispatch(setVideoLoading());
    try {
      const response = await api.getLiveStream(country);
      dispatch(setVideos(response?.data));
    } catch (error) {
      dispatch(setVideoFailure());
    }
  };
}
