import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees/slice";

const store = configureStore({
  reducer: { employees: employeeReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
