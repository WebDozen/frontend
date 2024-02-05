import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { TypeIDPState } from "./types";
import {
  getIdpByID,
  patchIdpByID,
  patchIdpsStatusByID,
  patchTasksStatusByID,
  postIdp,
} from "./actions";
import { setError, setPending } from "../utils";

const initialState: TypeIDPState = {
  idp: {
    id: 0,
    employee: false,
    name: "string",
    description: "string",
    pub_date: "string",
    deadline: "string",
    mentor: null,
    status: {
      id: 0,
      name: "string",
      slug: "none",
      color_fon: "string",
      color_text: "string",
    },
    tasks: [],
    statistic: {
      count_task: 0,
      task_done: 0,
    },
  },
  loading: false,
  error: null,
};

const idpSlice = createSlice({
  name: "idp",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postIdp.fulfilled, (state, action) => {
        state.idp = action.payload;
        state.loading = false;
      })
      .addCase(getIdpByID.fulfilled, (state, action) => {
        state.idp = action.payload;
        state.loading = false;
      })
      .addCase(patchIdpByID.fulfilled, (state, action) => {
        state.idp = action.payload;
        state.loading = false;
      })
      .addCase(patchIdpsStatusByID.fulfilled, (state, action) => {
        state.idp.status = action.payload;
        state.loading = false;
      })
      .addCase(patchTasksStatusByID.fulfilled, (state, action) => {
        const { task_id, status } = action.payload;
        state.idp.tasks = state.idp.tasks.map((task) => {
          return task.id.toString() === task_id.toString()
            ? { ...task, status: status }
            : task;
        });
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          getIdpByID.pending,
          postIdp.pending,
          patchIdpByID.pending,
          patchIdpsStatusByID.pending,
          patchTasksStatusByID.pending,
        ),
        setPending,
      )
      .addMatcher(
        isAnyOf(
          getIdpByID.rejected,
          postIdp.rejected,
          patchIdpByID.rejected,
          patchIdpsStatusByID.rejected,
          patchTasksStatusByID.rejected,
        ),
        setError,
      );
  },
});

// export const {} = idpSlice.actions;

export default idpSlice.reducer;
