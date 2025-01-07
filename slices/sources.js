import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  sourcesLoading: false,
  sourcesHasErrors: false,
  sources: [],
  featured_sources: [],
  source: null,
  tags: [],
  news: [],
  lastPage: 0,
  related_news: [],
  videos: [],
  sourcesItemsLoading: false,
  sourcesItemsHasErrors: false,
};

const sourcesSlice = createSlice({
  name: "sources",
  initialState,
  reducers: {
    getSources: (state) => {
      state.sourcesLoading = true;
    },
    getSourcesSuccess: (state, { payload }) => {
      state.sources = payload;
      state.sourcesLoading = false;
      state.sourcesHasErrors = false;
    },
    getSourcesFailure: (state) => {
      state.sourcesLoading = false;
      state.sourcesHasErrors = true;
    },
    getSourcesItems: (state) => {
      state.category = null;
      state.tags = [];
      state.news = [];
      state.lastPage = 0;
      state.related_news = [];
      state.featured_sources = [];
      state.videos = [];
      state.sourcesItemsLoading = true;
    },
    getSourcesItemsSuccess: (state, { payload }) => {
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
    getSourcesItemsFailure: (state) => {
      state.sourcesItemsLoading = false;
      state.sourcesItemsHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.sources,
      });
    });
  },
});

export const {
  getSources,
  getSourcesSuccess,
  getSourcesFailure,
  getSourcesItems,
  getSourcesItemsSuccess,
  getSourcesItemsFailure,
} = sourcesSlice.actions;

export const sourcesSelector = (state) => state.sources;

export default sourcesSlice.reducer;

//Asynchronous thunk action
export function fetchSources() {
  return async (dispatch) => {
    dispatch(getSources());

    try {
      const response = await api.getMainSources("abc");

      dispatch(getSourcesSuccess(response?.data?.return));
    } catch (error) {
      dispatch(getSourcesFailure());
    }
  };
}

//Asynchronous thunk action
export function fetchSourcesItems(
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
