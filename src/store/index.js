import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzasReducer from "./pizzas/slice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
  },
});
