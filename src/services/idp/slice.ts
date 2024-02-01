import type { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TypeIDPState } from "./types";
import { getIdpByID, patchIdpByID, postIdp } from "./actions";

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
      slug: "string",
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
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
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
