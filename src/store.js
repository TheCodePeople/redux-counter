let initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    // Increment action: increase the count by 1
    case "count/increment":
      return { count: state.count + 1 };
    // Decrement action: decrease the count by 1
    case "count/decrement":
      return { count: state.count - 1 };
    // Default case: return current state if action type is unknown
    default:
      break;
  }
  return state; // Return the current state if no action type matches
}

function dispatch(action) {
  initialState = countReducer(initialState, action); // Update the state using the countReducer
  console.log("🚀 ~ dispatch ~ initialState:", initialState);
  return initialState; // Return the updated state
}

dispatch({ type: "count/increment" }); // 1
dispatch({ type: "count/increment" }); // 2
dispatch({ type: "count/increment" }); // 3
