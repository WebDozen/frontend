import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { Employees } from "./slice";

export const getEmployees = createAsyncThunk<
  Employees[],
  undefined,
  { rejectValue: any }
>("employees/getEmployees", async (_, { rejectWithValue }) => {
  try {
    const res = await api.getEmployees();
    // потом убрать
    console.log("getEmployees() => res", res);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});
