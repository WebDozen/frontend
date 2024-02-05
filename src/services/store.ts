import { configureStore } from "@reduxjs/toolkit";
import employeesListReducer from "./employeesList/slice";
import employeeReducer from "./employee/slice";
import idpReducer from "./idp/slice";
import idpsListReducer from "./idpsList/slice";
import managersStatisticsReducer from "./managersStatistics/slice";
import taskReducer from "./task/slice";
import commentsReducer from "./comments/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    employeesList: employeesListReducer,
    employee: employeeReducer,
    idp: idpReducer,
    idpsList: idpsListReducer,
    managersStatistics: managersStatisticsReducer,
    task: taskReducer,
    comments: commentsReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
