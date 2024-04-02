const createStore = (reducer) => {
  let initialState = {
    count: 0,
  };

  const dispatch = (action) => {
    initialState = reducer(initialState, action);
    console.log("🚀 ~ state:", initialState); // Log state after each dispatch
  };

  const getState = () => {
    return initialState;
  };

  return { getState, dispatch };
};

function countReducer(state, action) {
  switch (action.type) {
    case "count/increment":
      return { count: state.count + 1 };
    case "count/decrement":
      return { count: state.count - 1 };
    default:
      return state; // Return state as default
  }
}

const store = createStore(countReducer);
store.dispatch({ type: "count/increment" });
store.dispatch({ type: "count/increment" });
store.dispatch({ type: "count/increment" });
console.log("🚀 ~ store:", store.getState());

export default store;
