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
  related_videos: [],
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
      state.favourite = payload?.return?.data || [];
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
        ...payload.favourite,
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
    const params = { favUserId: 72 };

    try {
      const response = await api.getUserFavorites(params);
      console.log(response, "resp");

      if (response?.data) {
        dispatch(getFavouriteSuccess(response?.data?.return));
      } else {
        dispatch(getFavouriteFailure());
      }
    } catch (error) {
      dispatch(getFavouriteFailure());
    }
  };
}

// Asynchronous thunk action to fetch videos with pagination
export function fetchVideosItems({ categorySlug, page = 1 }) {
  return async (dispatch) => {
    dispatch(getFavouriteItems());

    try {
      const response = await api.getVideoPage({ page, categorySlug });
      if (response?.data?.return?.main_videos?.data) {
        dispatch(getVideosItemsSuccess(response?.data?.return));
      } else {
        dispatch(getVideosItemsFailure());
      }
    } catch (error) {
      dispatch(getVideosItemsFailure());
    }
  };
}
