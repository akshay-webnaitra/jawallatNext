import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  categoriesLoading: false,
  categoriesHasErrors: false,
  categories: [],
  featured_categories: [],
  category: null,
  lastPage: [],
  main_news: [],
  tags: [],
  news: [],
  related_news: [],
  gold_exchange_rates: [],
  videos: [],
  categoriesItemsLoading: false,
  categoriesItemsHasErrors: false,
};

// A slice for categories with our three reducers
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.categoriesLoading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload;
      state.categoriesLoading = false;
      state.categoriesHasErrors = false;
    },
    getCategoriesFailure: (state) => {
      state.categoriesLoading = false;
      state.categoriesHasErrors = true;
    },
    getCategoriesItems: (state) => {
      state.category = null;
      state.main_news = [];
      state.tags = [];
      state.news = [];
      state.lastPage = [];
      state.related_news = [];
      state.featured_categories = [];
      state.videos = [];
      state.gold_exchange_rates = [];
      state.categoriesItemsLoading = true;
    },
    getCategoriesItemsSuccess: (state, { payload }) => {
      if (payload?.news?.current_page == 1) {
        state.main_news = payload?.main_news;
        state.category = payload?.category;
        state.tags = payload?.tags;
        state.news = payload?.news?.data;
        state.related_news = payload?.related_news;
        state.gold_exchange_rates = payload?.gold_exchange_rates;
        state.featured_categories = payload?.featured_categories;
        state.videos = payload?.videos;
        state.lastPage =
          payload?.news?.last_page >= 5 ? 5 : payload?.news?.last_page;
      }

      state.categoriesItemsLoading = false;
      state.categoriesItemsHasErrors = false;
    },
    getCategoriesItemsFailure: (state) => {
      state.categoriesItemsLoading = false;
      state.categoriesItemsHasErrors = true;
    },
    getSubCategoriesItems: (state) => {
      state.category = null;
      state.tags = [];
      state.news = [];
      state.lastPage = 1;
      state.related_news = [];
      state.featured_categories = [];
      state.videos = [];
      state.categoriesItemsLoading = true;
    },
    getSubCategoriesItemsSuccess: (state, { payload }) => {
      if (payload?.news?.current_page == 1) {
        state.category = payload?.category;
        state.tags = payload?.tags;
        state.news = payload?.news?.data;
        state.related_news = payload?.related_news;
        state.featured_categories = payload?.featured_categories;
        state.videos = payload?.videos;
        state.lastPage =
          payload?.news?.last_page >= 5 ? 5 : payload?.news?.last_page;
      }
      state.categoriesItemsLoading = false;
      state.categoriesItemsHasErrors = false;
    },
    getSubCategoriesItemsFailure: (state) => {
      state.categoriesItemsLoading = false;
      state.categoriesItemsHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.categories,
      });
    });
  },
});

export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
  getCategoriesItems,
  getCategoriesItemsSuccess,
  getCategoriesItemsFailure,
  getSubCategoriesItems,
  getSubCategoriesItemsSuccess,
  getSubCategoriesItemsFailure,
} = categoriesSlice.actions;

export const categoriesSelector = (state) => state.categories;

export default categoriesSlice.reducer;

//Asynchronous thunk action
export function fetchCategories() {
  return async (dispatch) => {
    dispatch(getCategories());

    try {
      const response = await api.getMainCategories("");
      dispatch(getCategoriesSuccess(response?.data?.return));
    } catch (error) {
      dispatch(getCategoriesFailure());
    }
  };
}

export function fetchCategoriesItems(
  category,
  page = false,
  callback = () => {},
  session = null
) {
  return async (dispatch) => {
    if (!page) {
      dispatch(getCategoriesItems());
    }
    try {
      let params = { category: category };
      if (page) {
        params = { category: category, page: page };
      }
      if (!!session) {
        api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
      }
      const response = await api.getCategoryPage(params);
      dispatch(getCategoriesItemsSuccess(response?.data?.return));
      callback(response?.data?.return);
    } catch (error) {
      dispatch(getCategoriesItemsFailure());
    }
  };
}

export function fetchSubCategoriesItems(
  category,
  page = false,
  callback = () => {},
  session = null
) {
  return async (dispatch) => {
    if (!page) {
      dispatch(getSubCategoriesItems());
    }
    if (!!session) {
      api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
    }
    try {
      let params = { category: category };
      if (page) {
        params = { category: category, page: page };
      }
      const response = await api.getSubCategoryPage(params);

      dispatch(getSubCategoriesItemsSuccess(response?.data?.return));
      callback(response?.data?.return);
    } catch (error) {
      dispatch(getSubCategoriesItemsFailure());
    }
  };
}
