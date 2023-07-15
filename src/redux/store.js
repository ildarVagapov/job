import { legacy_createStore, combineReducers } from "redux";
import { reducerPosition } from "./reducers/reducerPosition";
import { reducerFilter } from "./reducers/reducerFilter";

const reducer = combineReducers({
	position: reducerPosition,
	filters: reducerFilter
});

const store = legacy_createStore(reducer)
export { store }