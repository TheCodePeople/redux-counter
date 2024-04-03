import { createStore } from "redux";

let initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  console.log("🚀 ~ countReducer ~ state:", state);
  switch (action.type) {
    case "count/increment":
      return { count: state.count + 1 };
    case "count/decrement":
      return { count: state.count - 1 };

    default:
      break;
  }
  return state;
};

const store = createStore(countReducer);

store.dispatch({ type: "count/increment" });
store.dispatch({ type: "count/increment" });
store.dispatch({ type: "count/increment" });

const selectValue = (state) => state.count;
const currentValue = selectValue(store.getState());
console.log("🚀 ~ currentValue:", currentValue);

export default store;
