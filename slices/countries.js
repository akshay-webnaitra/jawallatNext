import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();

export const initialState = {
  countriesLoading: false,
  countriesError: false,
  countries: [],
};
const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountriesLoading: (state) => {
      state.countriesLoading = true;
      state.countriesError = false;
    },
    setCountriesSuccess: (state, action) => {
      state.countriesLoading = false;
      state.countriesError = false;
      state.countries = action?.payload?.data;
    },
    setCountriesFailure: (state) => {
      state.countriesLoading = false;
      state.countriesError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return {
        ...state,
        ...payload.country,
      };
    });
  },
});

export const { setCountriesLoading, setCountriesSuccess, setCountriesFailure } =
  countrySlice.actions;

export const countrySelector = (state) => state.country.countries;

export default countrySlice.reducer;

// Async thunk action
export function fetchAllCountries() {
  return async (dispatch) => {
    dispatch(setCountriesLoading());
    const params = {};
    try {
      const response = await api.getAllCountries(params);
      console.log(response, "data");

      dispatch(setCountriesSuccess(response?.data));
    } catch (error) {
      dispatch(setCountriesFailure());
    }
  };
}
