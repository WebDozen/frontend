import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./actions";
import type { STATUSES_IDP } from "../../utils/constants";
import type { TypeRequestError } from "../types";

export type TypeEmployeesItem = {
  id: number;
  mentor: boolean;
  last_name: string;
  first_name: string;
  middle_name: string;
  grade: string;
  position: string;
  is_mentor: boolean;
  idp: {
    status: keyof typeof STATUSES_IDP;
    has_task: boolean;
    completed_tasks_count: number;
    total_completed_idps: number;
    total_tasks_count: number;
  };
};

type EmployeesListState = {
  list: TypeEmployeesItem[];
  loading: boolean;
  error: string | null;
};

const initialState: EmployeesListState = {
  list: [],
  loading: false,
  error: null,
};

const employeesListSlice = createSlice({
  name: "employeesList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
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

// export const {} = employeesSlice.actions;

export default employeesListSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
function isPending(action: UnknownAction) {
  return action.type.endsWith("pending");
}
