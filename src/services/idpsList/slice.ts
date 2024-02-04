import { createSlice } from "@reduxjs/toolkit";
import type { TypeIDPState } from "./types";
import { getIdps } from "./actions";
import { setError, setPending } from "../utils";

const initialState: TypeIDPState = {
  idpsList: [],
  loading: false,
  error: null,
};

const idpsListSlice = createSlice({
  name: "idpsList",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIdps.fulfilled, (state, action) => {
        state.idpsList = action.payload;
        state.loading = false;
      })
      .addCase(getIdps.pending, setPending)
      .addCase(getIdps.rejected, setError);
  },
});

// export const {} = idpsListSlice.actions;

export default idpsListSlice.reducer;
