let initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
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
