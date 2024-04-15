let initialState = {
  count: 0,
};

export const INCREMENT = { type: "count/increment" };
export const DECREMENT = { type: "count/decrement" };
export const INCREMENT_BY_AMOUNT = {
  type: "count/incrementByAmount",
};
export const RESET = { type: "count/reset", payload: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/increment":
      return { ...state, count: state.count + 1 };
    case "count/decrement":
      return { ...state, count: state.count - 1 };
    case "count/incrementByAmount":
      return { ...state, count: state.count + +action.payload };
    case "count/reset":
      return { ...state, count: action.payload };

    default:
      break;
  }
  return state;
};
