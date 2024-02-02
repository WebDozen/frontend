import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TypeIDPState } from "./types";
import { getIdpByID, patchIdpByID, postIdp } from "./actions";
import type { TypeRequestError } from "../types";


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
    tasks: null,
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
      .addMatcher(isPending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<TypeRequestError>) => {
        state.error = action.payload.detail;
        state.loading = false;
      })
  },
});

// export const {} = idpSlice.actions;

export default idpSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
function isPending(action: UnknownAction) {
  return action.type.endsWith("pending");
}
