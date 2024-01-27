import { Button, Gap, SuperEllipse, Typography } from "../ui-kit";
import styles from "./NewPlanMessage.module.scss";
import calendar from "../../images/iconCalendarNewPlan.svg";

export default function NewPlanMessage() {
  return (
    <div className={styles.newPlanBlock}>
      <Gap size="5xl" />
      <SuperEllipse imageUrl={calendar} size={128} />
      <Gap size="l" />
      <Typography.Text
        view="primary-medium"
        tag="p"
        defaultMargins={false}
        className={styles.text}
      >
        Создайте план развития для сотрудника на основе его текущего грейда
      </Typography.Text>
      <Gap size="2xl" />
      <Button view="accent" className={styles.button}>
        Создать ИПР
      </Button>
      <Gap size="l" />
    </div>
  );
}
