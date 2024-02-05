import { createSlice } from "@reduxjs/toolkit";
import type { TypeStatisticState } from "./types";
import { getManagersStatistics } from "./actions";
import { setError, setPending } from "../utils";

const initialState: TypeStatisticState = {
  statistics: {
    count_employe: 0,
    count_employe_with_idp: 0,
    percent_progress_employees: 0,
    count_employe_without_idp: 0,
    count_idp_without_tasks: 0,
    count_idp_with_status_not_done: 0,
    count_idp_with_status_awaiting_review: 0,
  },
  loading: false,
  error: null,
};

const managersStatisticsSlice = createSlice({
  name: "managersStatistics",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getManagersStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload.statistics;
        state.loading = false;
      })
      .addCase(getManagersStatistics.pending, setPending)
      .addCase(getManagersStatistics.rejected, setError);
  },
});

// export const {} = managersStatisticsSlice.actions;

export default managersStatisticsSlice.reducer;
