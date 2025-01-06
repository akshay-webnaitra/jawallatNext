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

const rootReducer = combineReducers({
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
  videos: videoReducer,
  favourite: favouriteReducer,
  fan: fanReducer,
  affiliate: affiliateReducer,
});
export default rootReducer;
