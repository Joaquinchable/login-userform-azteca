import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reduxSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
