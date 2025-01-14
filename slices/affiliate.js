import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();

export const initialState = {
  category: null,
  affiliateLoading: false,
  products: [],
  lastPage: 0,
  product_categories: [],
  filtered_products: [],
};

const AffiliateSlice = createSlice({
  name: "affiliate",
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload;
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

export const {
  getAffiliate,
  getAffiliateSuccess,
  getAffiliateFailure,
  setCategory,
} = AffiliateSlice.actions;

export const AffiliateSelector = (state) => state.affiliate;

export default AffiliateSlice.reducer;

// Asynchronous thunk action to fetch videos
export function fetchAffiliate(category = "") {
  return async (dispatch) => {
    dispatch(getAffiliate());
    try {
      const response = await api.getAffiliate({ category });

      if (response?.data) {
        dispatch(getAffiliateSuccess(response?.data?.return ?? response?.data));
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
