import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { Employees } from "./slice";

// export const getEmployees = createAsyncThunk<
//   Employees[],
//   undefined,
//   { rejectValue: any }
// >("employees/getEmployees", async (_, { rejectWithValue }) => {
//   try {
//     const res = await api.getEmployees();
//     // потом убрать
//     console.log("getEmployees() => res", res);
//     return res;
//   } catch (err) {
//     return rejectWithValue(err);
//   }
// });

export const getEmployees = createAsyncThunk<
  Employees[],
  undefined,
  { rejectValue: any }
>("employees/getEmployees", async (_, { rejectWithValue }) => {
  const res = await fetch("http://127.0.0.1:8000/api/v1/employees/", {
    headers: {
      method: "GET",
      // "Content-Type": "application/json",
      Authorization: "Token 7770768818aca29747c62c4130a178283e93396c",
    },
  });
  if (!res.ok) {
    return rejectWithValue("Server Error");
  }
  const data = await res.json();
  return data;
});
