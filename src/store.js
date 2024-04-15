import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";

const store = configureStore({ reducer: counterSlice });

export default store;
