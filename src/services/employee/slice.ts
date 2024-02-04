import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeByID } from "./actions";
import { setError, setPending } from "../utils";

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
      .addCase(getEmployeeByID.pending, setPending)
      .addCase(getEmployeeByID.rejected, setError);
  },
});

export default employeeSlice.reducer;
