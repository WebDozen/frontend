import { createSlice } from "@reduxjs/toolkit";
import { getUserEmployeeByID } from "./actions";
import { setError, setPending } from "../utils";

type TypeInitialSttate = {
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  token: string;
  id: number | string;
  is_mentor: boolean;
  loading: boolean;
  error: string | null;
};
const initialState: TypeInitialSttate = {
  first_name: "",
  middle_name: "",
  last_name: "",
  role: "",
  token: "",
  id: NaN,
  is_mentor: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSetUser(state, actions) {
      localStorage.setItem("token", actions.payload.token);
      return (state = actions.payload);
    },
    handleRessetUser() {
      localStorage.clear();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserEmployeeByID.fulfilled, (state, action) => {
        const { is_mentor } = action.payload;
        state.is_mentor = is_mentor;
        state.loading = false;
      })
      .addCase(getUserEmployeeByID.pending, setPending)
      .addCase(getUserEmployeeByID.rejected, setError);
  },
});

export const { handleSetUser, handleRessetUser } = userSlice.actions;

export default userSlice.reducer;
