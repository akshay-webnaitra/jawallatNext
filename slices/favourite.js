import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();

export const initialState = {
  favouriteLoading: false,
  favouriteHasErrors: false,
  favourite: [], // Store the list of videos
  lastPage: 0, // Keep track of the pagination
  favouriteItemsLoading: false,
  favouriteItemsHasErrors: false,
};

// A slice for videos with reducers
const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    getFavourite: (state) => {
      state.favouriteLoading = true;
    },
    getFavouriteSuccess: (state, { payload }) => {
      state.favourite = payload?.news;
      state.favouriteLoading = false;
      state.favouriteHasErrors = false;
      state.lastPage = payload?.return?.last_page || 1;
    },
    getFavouriteFailure: (state) => {
      state.favouriteLoading = false;
      state.favouriteHasErrors = true;
    },
    getFavouriteItems: (state) => {
      state.favouriteItemsLoading = true;
      state.favouriteItemsHasErrors = false;
    },
    getFavouriteItemsSuccess: (state, { payload }) => {
      state.favourite = payload?.main_Favourite?.data || [];
      state.favouriteItemsLoading = false;
      state.favouriteItemsHasErrors = false;
    },
    getFavouriteItemsFailure: (state) => {
      state.favouriteItemsLoading = false;
      state.favouriteItemsHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return {
        ...state,
        ...payload?.favourite,
      };
    });
  },
});

// Three actions generated from the slice
export const {
  getFavourite,
  getFavouriteSuccess,
  getFavouriteFailure,
  getFavouriteItems,
  getFavouriteItemsSuccess,
  getFavouriteItemsFailure,
} = favouriteSlice.actions;

// A selector to get videos from state
export const favouriteSelector = (state) => state.favourite;

// The reducer
export default favouriteSlice.reducer;

// Asynchronous thunk action to fetch videos
export function fetchFavourite() {
  return async (dispatch) => {
    dispatch(getFavourite());
    try {
      const response = await api.getUserFavorites();
      if (response?.data?.favourite) {
        dispatch(getFavouriteSuccess(response?.data?.favourite));
      } else {
        dispatch(getFavouriteFailure());
      }
    } catch (error) {
      dispatch(getFavouriteFailure());
    }
  };
}

// Asynchronous thunk action to fetch videos with pagination
export function fetchFavouriteItems({ page = 1 }) {
  return async (dispatch) => {
    dispatch(getFavouriteItems());

    try {
      const response = await api.getFavourite({ page });
      if (response?.data) {
        dispatch(getVideosItemsSuccess(response?.data?.favourite));
      } else {
        dispatch(getVideosItemsFailure());
      }
    } catch (error) {
      dispatch(getVideosItemsFailure());
    }
  };
}
