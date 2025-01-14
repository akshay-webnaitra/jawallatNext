import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  tag: null,
  tagsLoading: false,
  tagsHasErrors: false,
  tags: [],
  featured_tags: [],
  sources: [],
  news: [],
  lastPage: 0,
  related_news: [],
  videos: [],
  tagsItemsLoading: false,
  tagsItemsHasErrors: false,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    getTags: (state) => {
      state.tagsLoading = true;
    },
    getTagsSuccess: (state, { payload }) => {
      state.tags = payload;
      state.tagsLoading = false;
      state.tagsHasErrors = false;
    },
    getTagsFailure: (state) => {
      state.tagsLoading = false;
      state.tagsHasErrors = true;
    },
    getTagsItems: (state) => {
      state.tag = null;
      state.tags = [];
      state.news = [];
      state.lastPage = 0;
      state.related_news = [];
      state.featured_tags = [];
      state.videos = [];
      state.tagsItemsLoading = true;
    },
    getTagsItemsSuccess: (state, { payload }) => {
      if (payload?.news?.current_page == 1) {
        state.tag = payload.tag;
        state.news = payload?.news?.data;
      }
      state.lastPage =
        payload?.news?.last_page >= 5 ? 5 : payload?.news?.last_page;
      state.related_news = payload?.related_news;
      state.videos = payload?.videos;
      state.tagsItemsLoading = false;
      state.tagsItemsHasErrors = false;
    },
    getTagsItemsFailure: (state) => {
      state.tagsItemsLoading = false;
      state.tagsItemsHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.tags,
      });
    });
  },
});

export const {
  getTags,
  getTagsSuccess,
  getTagsFailure,
  getTagsItems,
  getTagsItemsSuccess,
  getTagsItemsFailure,
} = tagsSlice.actions;

export const tagsSelector = (state) => state.tags;

export default tagsSlice.reducer;

//Asynchronous thunk action
export function fetchTagsItems(
  tag,
  page = false,
  callback = () => {},
  session = null
) {
  return async (dispatch) => {
    if (!page) {
      dispatch(getTagsItems());
    }
    try {
      let params = { tag: tag };
      if (page) {
        params = { tag: tag, page: page };
      }
      if (!!session) {
        api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
      }
      const response = await api.getTagPage(params);
      dispatch(getTagsItemsSuccess(response?.data?.return));
      callback(response?.data?.return);
    } catch (error) {
      dispatch(getTagsItemsFailure());
    }
  };
}
