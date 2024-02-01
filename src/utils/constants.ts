export enum STATUSES {
  completed = "green",
  awaiting_review = "orange",
  cancelled = "grey",
  in_progress = "blue",
  expired = "red",
  open = "teal",
  none = "grey",
}

export enum TYPE_SLAG_IDP {
  completed = "completed",
  awaiting_review = "awaiting_review",
  cancelled = "cancelled",
  in_progress = "in_progress",
  expired = "expired",
  open = "open",
  none = "none",
}

export enum TYPE_SLAG_TASK {
  completed = "completed",
  in_progress = "in_progress",
  open = "open",
  none = "none",
}

export const STATUSES_IDP = {
  open: {
    id: 1,
    name: "Открыт",
    slug: "open",
    color: "teal",
  },
  in_progress: {
    id: 2,
    name: "В работе",
    slug: "in_progress",
    color: "blue",
  },
  awaiting_review: {
    id: 3,
    name: "На ревью",
    slug: "awaiting_review",
    color: "orange",
  },
  completed: {
    id: 4,
    name: "Выполнен",
    slug: "completed",
    color: "green",
  },
  expired: {
    id: 5,
    name: "Просрочен",
    slug: "expired",
    color: "red",
  },
  cancelled: {
    id: 6,
    name: "Отменен",
    slug: "cancelled",
    color: "grey",
  },
  none: {
    id: 7,
    name: "Нет ИПР",
    slug: "none",
    color: "grey",
  },
} as const;

export const STATUSES_TASK = {
  open: {
    id: 1,
    name: "Открыта",
    slug: "open",
    color: "teal",
  },
  in_progress: {
    id: 2,
    name: "В работе",
    slug: "in_progress",
    color: "blue",
  },
  completed: {
    id: 3,
    name: "Выполнена",
    slug: "completed",
    color: "green",
  },
  none: {
    id: 4,
    name: "Нет задач",
    slug: "none",
    color: "grey",
  },
} as const;
