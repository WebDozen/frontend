import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TypeStatisticState } from "./types";
import { getManagersStatistics } from "./actions";
import type { TypeRequestError } from "../types";

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
        // const { statistic } = action.payload[0];
        console.log(action.payload[0]);
        state.statistics = action.payload[0].statistics;
        state.loading = false;
      })
      .addCase(getManagersStatistics.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<TypeRequestError>) => {
        state.error = action.payload.detail;
        state.loading = false;
      });
  },
});

// export const {} = managersStatisticsSlice.actions;

export default managersStatisticsSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
