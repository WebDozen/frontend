export type TypeStatistic = {
  count_employe: number;
  count_employe_with_idp: number;
  percent_progress_employees: number;
  count_employe_without_idp: number;
  count_idp_without_tasks: number;
  count_idp_with_status_not_done: number;
  count_idp_with_status_awaiting_review: number;
};

export type TypeStatisticState = {
  statistics: TypeStatistic;
  loading: boolean;
  error: string | null;
};
