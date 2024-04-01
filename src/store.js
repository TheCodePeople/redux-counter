import { createStore } from "redux";

let initialState = {
  count: 0,
};

// function dispatch(action) {
//   initialState = countReducer(initialState, action);
//   console.log("🚀 ~ dispatch ~ initialState:", initialState);
//   return initialState;
// }
// TODO: Define your store here
const store = createStore(countReducer);

const selectValue = (state) => state.count;
const currentValue = selectValue(store.getState());
console.log("🚀 ~ currentValue:", currentValue);
function countReducer(state = initialState, action) {
  console.log("🚀 ~ countReducer ~ initialState:", state);
  console.log("🚀 ~ countReducer ~ action:", action);
  switch (action.type) {
    case "count/increment":
      return { count: state.count + 1 };
    case "count/decrement":
      return { count: state.count - 1 };

    default:
      break;
  }
  return state;
}
console.log(store.getState()); // { count: 0 }

export { store, currentValue };
