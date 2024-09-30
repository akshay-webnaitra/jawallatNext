import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  searchLoading: false,
  searchHasErrors: false,
  searchResults: [],
  currentPage: 1,
  total: 0,
  from: 1,
  lastPage: 1,
  perPage: 40,
};

// A slice for search with our three reducers
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearch: (state) => {
      state.searchLoading = true;
    },
    getSearchSuccess: (state, { payload }) => {
      state.searchResults = payload.data;
      state.currentPage = payload.current_page;
      state.from = payload.from;
      state.lastPage = payload.last_page;
      state.perPage = payload.per_page;
      state.searchLoading = false;
      state.searchHasErrors = false;
      state.total = payload.total;
    },
    getSearchPaginateSuccess: (state, { payload }) => {
      state.currentPage = payload.current_page;
      state.from = payload.from;
      state.lastPage = payload?.last_page >= 5 ? 5 : payload?.last_page;
      state.perPage = payload.per_page;
      state.searchLoading = false;
      state.searchHasErrors = false;
    },
    getSearchFailure: (state) => {
      state.searchResults = [];
      state.currentPage = 1;
      state.from = 1;
      state.lastPage = 1;
      state.perPage = 40;
      state.searchLoading = false;
      state.searchHasErrors = true;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.search,
      });
    });
  },
});

// Three actions generated from the slice
export const {
  getSearch,
  getSearchSuccess,
  getSearchPaginateSuccess,
  getSearchFailure,
} = searchSlice.actions;

// A selector
export const searchSelector = (state) => state.search;

// The reducer
export default searchSlice.reducer;

// Asynchronous thunk action
export function fetchSearch(
  payload,
  page = 1,
  callback = () => {},
  session = null
) {
  return async (dispatch) => {
    dispatch(getSearch());
    try {
      if (!!session) {
        api.setAuthData({ "X-User-ID": `${session?.user?.id}` });
      }
      const response = await api.getSearchPage({
        category: payload?.category,
        source: payload?.source,
        type: payload?.type,
        keyword: payload?.keyword,
        page: page,
      });
      if (page != 1) {
        dispatch(getSearchPaginateSuccess(response?.data?.return));

        callback(response?.data?.return?.data);
      } else {
        dispatch(getSearchSuccess(response?.data?.return));
      }
    } catch (error) {
      dispatch(getSearchFailure());
    }
  };
}
