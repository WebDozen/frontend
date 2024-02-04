import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "Руководитель",
  middle_name: "Боссович",
  last_name: "Начальников",
  role: "manager",
  token: "64cedf72b2567c000d0679bc30ae3b6d31e433f2",
  id: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSetUser(state, actions) {
      state = actions.payload;
      localStorage.setItem("token", actions.payload.token);
    },
    handleRessetUser() {
      localStorage.clear();
      return initialState;
    },
  },
});

export const { handleSetUser, handleRessetUser } = userSlice.actions;

export default userSlice.reducer;
