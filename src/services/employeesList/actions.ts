import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { TypeEmployeesItem } from "./slice";

export const getEmployees = createAsyncThunk<
  TypeEmployeesItem[],
  undefined,
  { rejectValue: {} | unknown }
>("employeesList/getEmployees", async (_, { rejectWithValue }) => {
  try {
    const res = await api.getEmployees();
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});
