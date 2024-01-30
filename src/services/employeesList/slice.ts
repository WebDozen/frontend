import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./actions";

export type TypeEmployeesItem = {
  id: number;
  mentor: boolean;
  last_name: string;
  first_name: string;
  middle_name: string;
  grade: string;
  position: string;
  idp: {
    status: string;
    has_task: boolean;
    total_completed_idps: number;
    completed_tasks_count: number;
    total_idps_count: number;
  };
};

type TypeEmployeesListState = {
  list: TypeEmployeesItem[];
  loading: boolean;
  error: string | null;
};

const initialState: TypeEmployeesListState = {
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
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
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
