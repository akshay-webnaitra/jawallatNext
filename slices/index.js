import { combineReducers } from "redux";
import newsReducer from "./news";
import categoriesReducer from "./categories";
import pageReducer from "./page";
import homeItemReducer from "./homeItems";
import searchReducer from "./search";
import settingReducer from "./settings";
import serverItemReducer from "./serverItems";
import sourcesReducer from "./sources";
import tagsReducer from "./tags";
import userReducer from "./user";
import LiveStream from "./livestream";
import videoReducer from "./video";
import favouriteReducer from "./favourite";
import affiliateReducer from "./affiliate";
import fanReducer from "./fan";
import countryReducer from "./countries";
import contactReducer from "./contactUs";
import notificationSourceReducer from "./notificationSource";
import authReducer from "./auth";
const rootReducer = combineReducers({
  auth: authReducer,
  homeItems: homeItemReducer,
  serverItem: serverItemReducer,
  categories: categoriesReducer,
  search: searchReducer,
  setting: settingReducer,
  sources: sourcesReducer,
  tags: tagsReducer,
  news: newsReducer,
  page: pageReducer,
  user: userReducer,
  live: LiveStream,
  country: countryReducer,
  videos: videoReducer,
  notificationSource: notificationSourceReducer,
  favourite: favouriteReducer,
  fan: fanReducer,
  contact: contactReducer,
  affiliate: affiliateReducer,
});
export default rootReducer;
