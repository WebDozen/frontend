import { configureStore } from "@reduxjs/toolkit";
import employeesListReducer from "./employeesList/slice";
import employeeReducer from "./employee/slice";
import idpReducer from "./idp/slice";
import idpsListReducer from "./idpsList/slice";

const store = configureStore({
  reducer: {
    employeesList: employeesListReducer,
    employee: employeeReducer,
    idp: idpReducer,
    idpsList: idpsListReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
