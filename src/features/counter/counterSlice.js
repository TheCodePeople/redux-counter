import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += +action.payload;
    },
    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "count/increment":
//       return { ...state, count: state.count + 1 };
//     case "count/decrement":
//       return { ...state, count: state.count - 1 };
//     case "count/incrementByAmount":
//       return { ...state, count: state.count + +action.payload };
//     case "count/reset":
//       return { ...state, count: action.payload };

//     default:
//       break;
//   }
//   return state;
// };
