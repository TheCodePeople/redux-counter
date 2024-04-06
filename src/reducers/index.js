import { combineReducers } from "redux";
import { countReducer } from "./counterReducer";

const rootReducers = combineReducers({
  counter: countReducer,
});

export default rootReducers;
