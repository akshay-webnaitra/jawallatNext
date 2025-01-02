import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();

export const initialState = {
  // main_products: [],
  category: null,
  affiliateLoading: false,
  products: [], // Store the list of videos
  lastPage: 0, // Keep track of the pagination
  product_categories: [],
  filtered_products: [],
};

// A slice for videos with reducers
const AffiliateSlice = createSlice({
  name: "affiliate",
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload; // Set the selected category
      // Filter products based on the selected category
      state.filtered_products = state.category
        ? state.products.filter((product) => product.category === payload)
        : state?.products;
    },
    getAffiliate: (state) => {
      state.affiliateLoading = true;
    },
    getAffiliateSuccess: (state, { payload }) => {
      state.products = payload?.products?.data || [];
      state.product_categories = payload?.product_categories || [];
      state.affiliateLoading = false;
      state.lastPage = payload?.products?.last_page || 1;
      //   state.videosHasErrors = false;
      state.lastPage = payload?.main_products?.last_page || 1;
    },
    getAffiliateFailure: (state) => {
      state.videosLoading = false;
      state.videosHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return {
        ...state,
        ...payload?.affiliate,
      };
    });
  },
});

// Three actions generated from the slice
export const {
  getAffiliate,
  getAffiliateSuccess,
  getAffiliateFailure,
  setCategory,
} = AffiliateSlice.actions;

// A selector to get affiliate from state
export const AffiliateSelector = (state) => state.affiliate;

// The reducer
export default AffiliateSlice.reducer;

// Asynchronous thunk action to fetch videos
export function fetchAffiliate(category = "") {
  return async (dispatch) => {
    dispatch(getAffiliate());
    try {
      const response = await api.getAffiliate({ category });
      console.log(response, "affiliate");

      if (response?.data) {
        dispatch(getAffiliateSuccess(response?.data?.return));
      } else {
        dispatch(getAffiliateFailure());
      }
    } catch (error) {
      dispatch(getAffiliateFailure());
    }
  };
}

// Asynchronous thunk action to fetch videos with pagination
export function fetchVideosItems({ categorySlug, page = 1 }) {
  return async (dispatch) => {
    dispatch(getVideosItems());

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
