import type { TYPE_SLAG_IDP, TYPE_SLAG_TASK } from "../../utils/constants";

export type TypeStatus = {
  id: number;
  name: string;
  slug: keyof typeof TYPE_SLAG_IDP;
  color_fon: string;
  color_text: string;
};

export type TypeStatusTask = TypeStatus & {
  slug: keyof typeof TYPE_SLAG_TASK;
};

export type TypeTask = {
  id: number;
  name: string;
  description: string;
  type: number;
  status: TypeStatusTask;
  pub_date: string;
  source: string;
};

export type TypeMentor = {
  id: number;
  last_name: string;
  first_name: string;
  middle_name: string;
  grade: string;
  position: string;
};

export type TypeIDP = {
  id: number;
  employee: boolean;
  name: string;
  description: string;
  pub_date: string;
  deadline: string;
  mentor: TypeMentor | null;
  status: TypeStatus;
  tasks: TypeTask[];
  statistic: TypeStatistic;
};

export type TypeStatistic = {
  count_task: number;
  task_done: number
}

export type TypeIDPState = {
  idp: TypeIDP;
  loading: boolean;
  error: string | null;
};
