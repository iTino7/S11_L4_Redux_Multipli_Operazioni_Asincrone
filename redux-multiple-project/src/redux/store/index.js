import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favouriteReducer from "../reducers/favouriteReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
