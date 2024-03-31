let initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
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

function dispatch(action) {
  initialState = countReducer(initialState, action);
  console.log("🚀 ~ dispatch ~ initialState:", initialState);
  return initialState;
}

export { initialState, dispatch };
