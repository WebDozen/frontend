import { configureStore } from "@reduxjs/toolkit";
import employeesListReducer from "./employeesList/slice";
import employeeReducer from "./employee/slice";

const store = configureStore({
  reducer: {
    employeesList: employeesListReducer,
    employee: employeeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
