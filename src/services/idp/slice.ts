import type { UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type TypeTask = {
  id: number;
  name: string;
  description: string;
  type: number;
  status: string | null;
  pub_date: string;
  source: string;
};

export type TypeStatus = {
  id: number;
  name: string;
  slug: string;
  color_fon: string;
  color_text: string;
};

export type TypeMentor = {
  id: number;
  last_name: string;
  first_name: string;
  middle_name: string;
  grade: string;
  position: string;
};

type TypeIDP = {
  id: number;
  employee: boolean;
  name: string;
  description: string;
  pub_date: string;
  deadline: string;
  mentor: TypeMentor | null;
  status: TypeStatus;
  tasks: TypeTask[] | null;
};

type TypeIDPState = {
  idp: TypeIDP;
  loading: boolean;
  error: string | null;
};

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

const employeesSlice = createSlice({
  name: "idp",
  initialState,

  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = employeesSlice.actions;

export default employeesSlice.reducer;

function isError(action: UnknownAction) {
  return action.type.endsWith("rejected");
}
