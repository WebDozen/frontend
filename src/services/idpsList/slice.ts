import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TypeIDPState } from "./types";
import { getIdps } from "./actions";
import type { TypeRequestError } from "../types";

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
      .addCase(getIdps.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<TypeRequestError>) => {
        state.error = action.payload.detail;
        state.loading = false;
      });
  },
});

// export const {} = idpsListSlice.actions;

export default idpsListSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
