export type TypeComment = {
  id: number | string;
  text: string;
  pub_date: string;
  author: {
    id: number | string;
    first_name: string;
    last_name: string;
    middle_name: string;
    is_mentor?: boolean;
  };
};

export type TypeCommentsState = {
  taskComments: TypeComment[];
  idpComments: TypeComment[];
  loading: boolean;
  error: string | null;
};
