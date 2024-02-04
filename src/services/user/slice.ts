import { createSlice } from "@reduxjs/toolkit";

type TypeInitialSttate = {
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  token: string;
  id: number | string;
};
const initialState: TypeInitialSttate = {
  first_name: "",
  middle_name: "",
  last_name: "",
  role: "",
  token: "",
  id: 0,
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
});

export const { handleSetUser, handleRessetUser } = userSlice.actions;

export default userSlice.reducer;
