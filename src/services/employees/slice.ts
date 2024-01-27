import type { UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type Employees = {
  id: number;
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

  reducers: {
    
  },
  extraReducers: (builder) => {},
});

export const {} = employeesSlice.actions;

export default employeesSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
