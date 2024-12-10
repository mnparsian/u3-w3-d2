import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import searchResultsReducer from "../reducers/searchResultsReducer";
import companySearchReducer from "../reducers/companySearchReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  searchResults: searchResultsReducer,
  CompanySearchResults: companySearchReducer
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
