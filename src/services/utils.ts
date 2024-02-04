import type { UnknownAction } from "@reduxjs/toolkit";
import type { TypeRequestError } from "./types";

export const setPending = (state: {
  error: string | null;
  loading: boolean;
}) => {
  state.error = null;
  state.loading = true;
};

export const setError = (
  state: {
    error: string | null;
    loading: boolean;
  },
  action: UnknownAction,
) => {
  let { detail } = action.payload as TypeRequestError;
  state.error = detail;
  state.loading = false;
};
