import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./actions";
import type { STATUSES_IDP } from "../../utils/constants";
import { setError, setPending } from "../utils";

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
      .addCase(getEmployees.pending, setPending)
      .addCase(getEmployees.rejected, setError);
  },
});

// export const {} = employeesSlice.actions;

export default employeesListSlice.reducer;
