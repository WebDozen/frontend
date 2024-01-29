import type { UnknownAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


export type TypeTasks = {
  id: number;
  name: string;
  description: string;
  type: number;
  status: string | null;
  pub_date: string;
  source: string;
};

type TypeIDP =
  | {
      id: number;
      mentor: {
        id: number;
        last_name: string;
        first_name: string;
        middle_name: string;
        grade: string;
        position: string;
      };
      employee: boolean;
      name: string;
      description: string;
      pub_date: string;
      deadline: string;
      
      status: {
        id: number;
        name: string;
        slug: string;
        color_fon: string;
        color_text: string;
      };
      tasks: TypeTasks[];
    }
  | {};

type TypeIDPState = {
  idp: TypeIDP;
  tasks: TypeTasks[];
  loading: boolean;
  error: string | null;
};

const initialState: TypeIDPState = {
  idp: {},
  tasks: [],
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
