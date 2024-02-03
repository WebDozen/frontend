import type { RootState } from "./store";

export const getEmployeesListData = (state: RootState) => state.employeesList;
export const getEmployeeData = (state: RootState) => state.employee;
export const getIdpsListData = (state: RootState) => state.idpsList;
export const getIdpData = (state: RootState) => state.idp;
export const getManagersStatisticsData = (state: RootState) =>
  state.managersStatistics;
export const getTasksSidePanelData = (state: RootState) => state.task;
export const getCommentsData = (state: RootState) => state.comments;
