import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  categorySearchLoading: false,
  categorySearchHasErrors: false,
  categorySearch: [],
  news: [],
  celebrity: {},
  lastPage: 0,
  related_news: [],
};

const categorySearchSlice = createSlice({
  name: "categorySearch",
  initialState,
  reducers: {
    getCategorySearch: (state) => {
      state.sourcesLoading = true;
    },
    getCategorySearchSuccess: (state, { payload }) => {
      console.log(payload, "payload");
      state.news = payload.news.data;
      state.celebrity = payload.celeb;
      state.sources = payload;
      state.sourcesLoading = false;
      state.sourcesHasErrors = false;
    },
    getCategorySearchFailure: (state) => {
      state.sourcesLoading = false;
      state.sourcesHasErrors = true;
    },
    getCategorySearchItems: (state) => {
      state.category = null;
      state.tags = [];
      state.news = [];
      state.lastPage = 0;
      state.related_news = [];
      state.featured_sources = [];
      state.videos = [];
      state.sourcesItemsLoading = true;
    },
    getCategorySearchItemsSuccess: (state, { payload }) => {
      if (payload?.news?.current_page == 1) {
        state.news = payload?.news?.data;
      }
      state.lastPage =
        payload?.news?.last_page >= 5 ? 5 : payload?.news?.last_page;
      state.related_news = payload?.related_news;
      state.videos = payload?.videos;
      state.sourcesItemsLoading = false;
      state.sourcesItemsHasErrors = false;
    },
    getCategorySearchItemsFailure: (state) => {
      state.sourcesItemsLoading = false;
      state.sourcesItemsHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.fan,
      });
    });
  },
});

export const {
  getCategorySearch,
  getCategorySearchSuccess,
  getCategorySearchFailure,
  getCategorySearchItems,
  getCategorySearchItemsSuccess,
  getCategorySearchItemsFailure,
} = categorySearchSlice.actions;

export const categorySearchSelector = (state) => state.fan;

export default categorySearchSlice.reducer;

//Asynchronous thunk action
export function fetchCategorySearch() {
  return async (dispatch) => {
    dispatch(getCategorySearch());
    const params = {};
    try {
      const response = await api.getCategorySearchPage(params);
      console.log(response, "resp");

      dispatch(getCategorySearchSuccess(response?.data));
    } catch (error) {
      dispatch(getCategorySearchFailure());
    }
  };
}

//Asynchronous thunk action
export function fetchCategorySerchItems(
  source,
  page = false,
  callback = () => {},
  session = null
) {
  return async (dispatch) => {
    if (!page) {
      dispatch(getSourcesItems());
    }
    try {
      let params = { source: source };
      if (page) {
        params = { source: source, page: page };
      }
      if (!!session) {
        api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
      }
      const response = await api.getNewsSourcePage(params);

      dispatch(getSourcesItemsSuccess(response?.data?.return));
      callback(response?.data?.return);
    } catch (error) {
      dispatch(getSourcesItemsFailure());
    }
  };
}
