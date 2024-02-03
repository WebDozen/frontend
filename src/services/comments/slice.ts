import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  getIdpCommentsByIdpID,
  getTaskCommentsByTaskID,
  postIdpCommentsByIdpID,
  postTaskCommentsByTaskID,
} from "./actions";
import type { TypeRequestError } from "../types";
import type { TypeCommentsState } from "./types";

const initialState: TypeCommentsState = {
  taskComments: [],
  idpComments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskCommentsByTaskID.fulfilled, (state, action) => {
        state.taskComments = action.payload;
        state.loading = false;
      })
      .addCase(postTaskCommentsByTaskID.fulfilled, (state, action) => {
        state.taskComments.push(action.payload);
        state.loading = false;
      })

      .addCase(getIdpCommentsByIdpID.fulfilled, (state, action) => {
        state.idpComments = action.payload;
        state.loading = false;
      })
      .addCase(postIdpCommentsByIdpID.fulfilled, (state, action) => {
        state.idpComments.push(action.payload);
        state.loading = false;
      })
      .addMatcher(isPending, (state) => {
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

export default commentsSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
function isPending(action: UnknownAction) {
  return action.type.endsWith("pending");
}
