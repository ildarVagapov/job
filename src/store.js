import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filter/filterSlice";
import { positionFilter } from "features/position/positionSlice";

const reducer = combineReducers({
	filters: filterReducer,
	position: positionFilter
});
export const store = configureStore({ reducer, devTools: true })