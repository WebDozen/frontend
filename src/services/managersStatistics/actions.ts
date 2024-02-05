import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { TypeStatistic } from "./types";

export const getManagersStatistics = createAsyncThunk<
  { statistics: TypeStatistic },
  undefined,
  { rejectValue: unknown }
>(
  "managersStatistics/getManagersStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.getManagersStatistics();
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
