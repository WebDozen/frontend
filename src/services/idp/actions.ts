import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/Api";
import type { TypeIDP } from "./types";

export const postIdp = createAsyncThunk<
  TypeIDP,
  { employee_id: string | number; data: {} },
  { rejectValue: {} | unknown }
>("idp/postIdp", async (idpData, { rejectWithValue }) => {
  const { employee_id, data } = idpData;

  try {
    const res = await api.postIdp(employee_id, data);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getIdpByID = createAsyncThunk<
  TypeIDP,
  string | undefined,
  { rejectValue: {} | unknown }
>("idp/getIdpByID", async (employee_id, { rejectWithValue }) => {
  try {
    const res = await api.getIdps(employee_id);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const patchIdpByID = createAsyncThunk<
  TypeIDP,
  { employee_id: string | number; idp_id: string | number; data: {} },
  { rejectValue: {} | unknown }
>("idp/patchIdpByID", async (idpData, { rejectWithValue }) => {
  const { employee_id, idp_id, data } = idpData;
  try {
    const res = await api.patchIdpByID(employee_id, idp_id, data);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});
