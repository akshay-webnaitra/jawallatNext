import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  homeItemsLoading: false,
  homeItemsHasErrors: false,
  tags: [],
  ticker: [],
  featured: [],
  videos: [],
  products: [],
  top_news: [],
  featured_categories: [],
};

const homeItemsSlice = createSlice({
  name: "homeItems",
  initialState,
  reducers: {
    getHomeItems: (state) => {
      state.homeItemsLoading = true;
    },
    getHomeItemsSuccess: (state, { payload }) => {
      state.top_news = payload?.top_news;
      state.tags = payload?.tags;
      state.ticker = payload?.ticker;
      state.featured = payload?.featured;
      state.videos = payload?.videos;
      state.products = payload?.products;
      state.featured_categories = payload?.featured_categories;
      state.homeItemsLoading = false;
      state.homeItemsHasErrors = false;
    },
    getHomeItemsFailure: (state) => {
      state.tags = [];
      state.ticker = [];
      state.featured = [];
      state.videos = [];
      state.top_news = [];
      state.categories = [];
      state.products = [];
      state.homeItemsLoading = false;
      state.homeItemsHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.homeItems,
      });
    });
  },
});

export const { getHomeItems, getHomeItemsSuccess, getHomeItemsFailure } =
  homeItemsSlice.actions;

export const homeItemsSelector = (state) => state.homeItems;

export default homeItemsSlice.reducer;

//Asynchronous thunk action
export function fetchHomeItems(session = null) {
  return async (dispatch) => {
    dispatch(getHomeItems());

    try {
      if (!!session) {
        api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
      }

      const response = await api.getHomePage();
      dispatch(getHomeItemsSuccess(response?.data?.return));
    } catch (error) {
      dispatch(getHomeItemsFailure());
    }
  };
}
