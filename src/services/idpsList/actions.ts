import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { TypeIDP } from "../idp/types";

export const getIdps = createAsyncThunk<
  TypeIDP[],
  string | number,
  { rejectValue: unknown }
>("idpsList/getIdps", async (employee_id, { rejectWithValue }) => {
  try {
    const res = await api.getIdps(employee_id);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});
