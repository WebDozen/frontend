import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./actions";

export type Employees = {
  id: number;
  mentor: boolean;
  last_name: string;
  first_name: string;
  middle_name: string;
  grade: string;
  position: string;
  task_count: number;
  idp_status: string;
};

type EmployeesState = {
  list: Employees[];
  loading: boolean;
  error: string | null;
};

const initialState: EmployeesState = {
  list: [],
  loading: false,
  error: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// export const {} = employeesSlice.actions;

export default employeesSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
function isPending(action: UnknownAction) {
  return action.type.endsWith("pending");
}
