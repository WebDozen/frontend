import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { TypeComment } from "./types";

export const getTaskCommentsByTaskID = createAsyncThunk<
  TypeComment[],
  string | undefined,
  { rejectValue: {} | unknown }
>("comments/getTaskCommentsByTaskID", async (task_id, { rejectWithValue }) => {
  try {
    const res = await api.getTaskCommentsByTaskID(task_id);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const postTaskCommentsByTaskID = createAsyncThunk<
  TypeComment,
  { task_id: string | undefined; data: { text: string } },
  { rejectValue: {} | unknown }
>(
  "comments/postTaskCommentsByTaskID",
  async ({ task_id, data }, { rejectWithValue }) => {
    try {
      const res = await api.postTaskCommentsByTaskID(task_id, data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getIdpCommentsByIdpID = createAsyncThunk<
  TypeComment[],
  string | undefined,
  { rejectValue: {} | unknown }
>("comments/getIdpCommentsByIdpID", async (task_id, { rejectWithValue }) => {
  try {
    const res = await api.getIdpCommentsByIdpID(task_id);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const postIdpCommentsByIdpID = createAsyncThunk<
  TypeComment,
  { idp_id: string | undefined; data: { text: string } },
  { rejectValue: {} | unknown }
>(
  "comments/postIdpCommentsByIdpID",
  async ({ idp_id, data }, { rejectWithValue }) => {
    try {
      const res = await api.postIdpCommentsByIdpID(idp_id, data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
