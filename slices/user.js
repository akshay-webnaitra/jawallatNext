import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import Api from "@/services/Api";

const api = Api.create();
export const initialState = {
  userLoading: false,
  userHasErrors: false,
  user: {},
  favoriteLoading: false,
  favoriteHasErrors: false,
};

// A slice for user with our three reducers
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      state.userLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.user = payload?.user;
      state.userLoading = false;
      state.userHasErrors = false;
    },
    getUserFailure: (state) => {
      state.userLoading = false;
      state.previous_user_id = 0;
      state.userHasErrors = true;
    },
    addUserFavoriteRequest: (state) => {
      state.favoriteLoading = true;
      state.favoriteHasErrors = false;
    },
    addUserFavoriteSuccess: (state) => {
      state.favoriteLoading = false;
      state.favoriteHasErrors = false;
    },
    addUserFavoriteFailure: (state) => {
      state.favoriteLoading = false;
      state.favoriteHasErrors = true;
    },
    deleteUserFavoriteRequest: (state) => {
      state.favoriteLoading = true;
      state.favoriteHasErrors = false;
    },
    deleteUserFavoriteSuccess: (state) => {
      state.favoriteLoading = false;
      state.favoriteHasErrors = false;
    },
    deleteUserFavoriteFailure: (state) => {
      state.favoriteLoading = false;
      state.favoriteHasErrors = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, { payload }) => {
      return (state = {
        ...state,
        ...payload.user,
      });
    });
  },
});

// Three actions generated from the slice
export const {
  getUser,
  getUserSuccess,
  getUserFailure,
  addUserFavoriteRequest,
  addUserFavoriteSuccess,
  addUserFavoriteFailure,
  deleteUserFavoriteRequest,
  deleteUserFavoriteSuccess,
  deleteUserFavoriteFailure,
} = userSlice.actions;

// A selector
export const userSelector = (state) => state.user;

// The reducer
export default userSlice.reducer;

// Asynchronous thunk action
export function fetchUser(callback = (data) => {}) {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const response = await api.getUser();
      if (!!response?.data?.return?.user) {
        callback(response?.data?.return);
        dispatch(getUserSuccess(response?.data?.return));
      } else {
        dispatch(getUserFailure());
      }
    } catch (error) {
      dispatch(getUserFailure());
    }
  };
}

export function addUserFavorite(params, callback = () => {}) {
  return async (dispatch) => {
    dispatch(addUserFavoriteRequest());

    try {
      const response = await api.addUserFavorite(params);
      if (response.data.status == 200) {
        callback();
        dispatch(addUserFavoriteSuccess());
      } else {
        dispatch(addUserFavoriteFailure());
      }
    } catch (error) {
      dispatch(addUserFavoriteFailure());
    }
  };
}

export function deleteUserFavorite(params, callback = () => {}) {
  return async (dispatch) => {
    dispatch(deleteUserFavoriteRequest());

    try {
      const response = await api.deleteUserFavorite(params);
      if (response.data.status == 200) {
        callback();
        dispatch(deleteUserFavoriteSuccess());
      } else {
        dispatch(deleteUserFavoriteFailure());
      }
    } catch (error) {
      dispatch(deleteUserFavoriteFailure());
    }
  };
}
