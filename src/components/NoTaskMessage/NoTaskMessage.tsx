import { Gap, SuperEllipse, Typography } from "../ui-kit";
import styles from "./NoTaskMessage.module.scss";
import calendar from "../../images/iconCalendarNewPlan.svg";

export default function NoTaskMessage() {
  return (
    <div className={styles.newPlanBlock}>
      <SuperEllipse imageUrl={calendar} size={128} />
      <Gap size="l" />
      <Typography.Title
        font="styrene"
        view="xsmall"
        tag="h3"
        defaultMargins={false}
        className={styles.text}
      >
        У сотрудника не назначены задачи
      </Typography.Title>
      <Gap size="xs" />
      <Typography.Text
        view="primary-medium"
        tag="p"
        weight="regular"
        defaultMargins={false}
      >
        Новые задачи можно добавить в режиме редактирования
      </Typography.Text>
    </div>
  );
}
