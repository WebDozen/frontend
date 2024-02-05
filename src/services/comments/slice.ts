import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getIdpCommentsByIdpID,
  getTaskCommentsByTaskID,
  postIdpCommentsByIdpID,
  postTaskCommentsByTaskID,
} from "./actions";
import type { TypeCommentsState } from "./types";
import { setError, setPending } from "../utils";

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
      .addMatcher(
        isAnyOf(
          getTaskCommentsByTaskID.pending,
          postTaskCommentsByTaskID.pending,
          getIdpCommentsByIdpID.pending,
          postIdpCommentsByIdpID.pending,
        ),
        setPending,
      )
      .addMatcher(
        isAnyOf(
          getTaskCommentsByTaskID.rejected,
          postTaskCommentsByTaskID.rejected,
          getIdpCommentsByIdpID.rejected,
          postIdpCommentsByIdpID.rejected,
        ),
        setError,
      );
  },
});

// export const {} = managersStatisticsSlice.actions;

export default commentsSlice.reducer;
