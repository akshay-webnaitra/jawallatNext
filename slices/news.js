import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  newsLoading: false,
  newsHasErrors: false,
  news: {},
  related_news: [],
  previous_news_id: 0,
  shareLoading: false,
  shareSuccess: false,
  shareError: null,
};

// A slice for news with our three reducers
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state) => {
      state.newsLoading = true;
    },
    getNewsSuccess: (state, { payload }) => {
      state.news = payload?.news;
      state.related_news = payload?.related_news;
      state.previous_news_id = payload?.previous_news_id;
      state.newsLoading = false;
      state.newsHasErrors = false;
    },
    getNewsFailure: (state) => {
      state.newsLoading = false;
      state.previous_news_id = 0;
      state.newsHasErrors = true;
    },
    shareNewsStart: (state) => {
      state.shareLoading = true;
      state.shareSuccess = false;
      state.shareError = null;
    },
    shareNewsSuccess: (state) => {
      state.shareLoading = false;
      state.shareSuccess = true;
    },
    shareNewsFailure: (state, { payload }) => {
      state.shareLoading = false;
      state.shareError = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.news,
      });
    });
  },
});

// Three actions generated from the slice
export const {
  getNews,
  getNewsSuccess,
  getNewsFailure,
  shareNewsStart,
  shareNewsSuccess,
  shareNewsFailure,
} = newsSlice.actions;

// A selector
export const newsSelector = (state) => state.news;

// The reducer
export default newsSlice.reducer;

// Asynchronous thunk action
export function fetchNews(
  value = null,
  key = "slug",
  callback = (data) => {},
  session = null
) {
  return async (dispatch) => {
    dispatch(getNews());

    try {
      let params = {};
      params[key] = value.toString();
      if (!!session) {
        api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
      }

      const response = await api.getSingleNewsPage(params);

      if (!!response?.data?.return?.news) {
        callback(response?.data?.return);

        dispatch(getNewsSuccess(response?.data?.return));
      } else {
        dispatch(getNewsFailure());
      }
    } catch (error) {
      console.log(error);
      dispatch(getNewsFailure());
    }
  };
}

// Thunk for Sharing News
export function shareNews(videoId) {
  return async (dispatch) => {
    dispatch(shareNewsStart());

    try {
      const response = await api.post(`/api/increaseShares`, { id: videoId });
      dispatch(shareNewsSuccess());
      console.log("Share successful:", response.data);
    } catch (error) {
      console.error("Error sharing news:", error);
      dispatch(shareNewsFailure(error.message));
    }
  };
}
