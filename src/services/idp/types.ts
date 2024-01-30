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

export type TypeIDP = {
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

export type TypeIDPState = {
  idp: TypeIDP;
  loading: boolean;
  error: string | null;
};
