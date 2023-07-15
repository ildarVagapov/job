import { legacy_createStore, combineReducers } from "redux";
import { reducerPosition } from "./reducers/reducerPosition";

const reducer = combineReducers({
	test: () => 'test reducer'
});

const store = legacy_createStore(reducer)
export { store }