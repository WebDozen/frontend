import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { TypeStatistic } from "./types";

export const getManagersStatistics = createAsyncThunk<
  { statistics: TypeStatistic }[],
  string | number,
  { rejectValue: unknown }
>(
  "managersStatistics/getManagersStatistics",
  async (head_id, { rejectWithValue }) => {
    try {
      const res = await api.getManagersStatistics(head_id);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
