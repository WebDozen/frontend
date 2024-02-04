import type { TypeTask } from "../idp/types";

export type TypeTaskState = {
  task: TypeTask;
  is_open_side_panel: boolean;
  loading: boolean;
  error: string | null;
};
