import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeByID } from "./actions";

export type Employee = {
  id: number;
  is_mentor: boolean;
  last_name: string;
  first_name: string;
  middle_name: string;
  grade: string;
  position: string;
  task_count: number;
  idp_status: string;
};

type EmployeesState = {
  employee: Employee | {};
  loading: boolean;
  error: string | null;
};

const initialState: EmployeesState = {
  employee: {},
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
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addMatcher(isPending, (state) => {
        console.log("addMatcher(isPending, (state) => ", state);
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
