import { Button, Gap, SuperEllipse, Typography } from "../ui-kit";
import styles from "./NewPlanMessage.module.scss";
import calendar from "../../images/iconCalendarNewPlan.svg";
import books from "../../images/managerNoIprBooks.svg";
import { useLocation } from "react-router-dom";

export default function NewPlanMessage() {
  const { pathname } = useLocation();

  //const role = "manager";
  const role = "employee";
  const icon = role === "employee" ? books : calendar;
  const mainText =
    role === "employee"
      ? "Обратитесь к руководителю, чтобы скорее начать развиваться!"
      : "Создайте план развития для сотрудника на основе его текущего грейда";
  const showButton = pathname === "/employee/1";
  const showTitle = pathname === "/";

  return (
    <div className={styles.newPlanBlock}>
      <Gap size="5xl" />
      <SuperEllipse imageUrl={icon} size={128} />
      <Gap size="l" />
      {showTitle && (
        <div>
          <Typography.Title
            view="xsmall"
            tag="h3"
            defaultMargins={false}
            className={styles.text}
          >
            У вас пока нет ИПР
          </Typography.Title>
          <Gap size="2xs" />
        </div>
      )}
      <Typography.Text
        view="primary-medium"
        tag="p"
        defaultMargins={false}
        className={styles.text}
      >
        {mainText}
      </Typography.Text>
      {showButton && (
        <div>
          <Gap size="2xl" />
          <Button view="accent" className={styles.button}>
            Создать ИПР
          </Button>
          <Gap size="l" />
        </div>
      )}
    </div>
  );
}
