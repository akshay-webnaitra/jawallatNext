import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedVideo: null,
};

const LiveStream = createSlice({
  name: "liveStream",
  initialState,
  reducers: {
    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
  },
});

export const { setSelectedVideo } = LiveStream.actions;

export default LiveStream.reducer;
