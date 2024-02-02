import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeByID } from "./actions";
import type { TypeRequestError } from "../types";

export type Employee = {
  id: number | string;
  mentor: boolean;
  last_name: string;
  first_name: string;
  middle_name: string;
  grade: string;
  position: string;
  is_mentor: boolean;
  idp: {
    status: string;
    has_task: boolean;
    completed_tasks_count: number;
    total_completed_idps: number;
    total_tasks_count: number;
    total_idp_count: number;
  };
};

type EmployeesState = {
  employee: Employee;
  loading: boolean;
  error: string | null;
};

const initialState: EmployeesState = {
  employee: {
    id: 0,
    is_mentor: false,
    last_name: "",
    first_name: "",
    middle_name: "",
    grade: "",
    position: "",
    mentor: false,
    idp: {
      status: "",
      has_task: false,
      total_completed_idps: 0,
      completed_tasks_count: 0,
      total_tasks_count: 0,
      total_idp_count: 0,
    },
  },
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeeByID.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<TypeRequestError>) => {
        state.error = action.payload.detail;
        state.loading = false;
      })
      .addMatcher(isPending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default employeeSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
function isPending(action: UnknownAction) {
  return action.type.endsWith("pending");
}
