import type { RootState } from "./store";

export const getEmployeesListData = (state: RootState) => state.employeesList;
export const getEmployeeData = (state: RootState) => state.employee;
// export const getIDPListData = (state: RootState) => state.employees;
