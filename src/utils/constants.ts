export const enum STATUSES {
  completed = "green",
  awaiting_review = "orange",
  cancelled = "grey",
  in_progress = "blue",
  expired = "red",
  open = "teal",
  none = "grey",
}

export const enum TYPE_SLAG_IDP {
  completed = "completed",
  awaiting_review = "awaiting_review",
  cancelled = "cancelled",
  in_progress = "in_progress",
  expired = "expired",
  open = "open",
  none = "none",
}

export const enum TYPE_SLAG_TASK {
  completed = "completed",
  in_progress = "in_progress",
  open = "open",
  none = "none",
}

export const enum TASK_TYPES {
  "Альфа академия" = 1,
  "Курс" = 2,
  "Книга" = 3,
  "Другое" = 4,
  'Рабочая задача' = 5,
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

export const DATE_FROM_ISO = (date: any) => {
  const newDate = new Date(date);
  const day = newDate.getUTCDate().toString().padStart(2, '0');
  const month = (newDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getUTCFullYear();
  return `${day}.${month}.${year}`;
};

export const DATE_TO_ISO = (date: any) => {
  if (date === '') {
    return;
  }
  const parts = date.split(".");
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];
  return new Date(`${year}-${month}-${day}`).toISOString();
};