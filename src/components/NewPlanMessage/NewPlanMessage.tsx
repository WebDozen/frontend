import { Button, Gap, SuperEllipse, Typography } from "../ui-kit";
import styles from "./NewPlanMessage.module.scss";
import calendar from "../../images/iconCalendarNewPlan.svg";
import books from "../../images/managerNoIprBooks.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function NewPlanMessage() {
  const { pathname } = useLocation();
  const {id} = useParams();
  const navigate = useNavigate();

  //const role = "employee";
  const role = "manager";
  const icon = role === "manager" ? calendar : books;
  const mainText =
    role === "manager"
      ? "Создайте план развития для сотрудника на основе его текущего грейда"
      : "Обратитесь к руководителю, чтобы скорее начать развиваться!";
  const showButton = pathname === `/employee/${id}`;
  const showTitle = pathname === "/";

  const handleButtonClick: (id: string | undefined) => void = (id) => {
    navigate(`/employee/${id}/add_idp`);
  };

  return (
    <div className={styles.newPlanBlock}>
      <Gap size="4xl" />
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
          <Button view="accent" className={styles.button} onClick={() => handleButtonClick(id)}>
            Создать ИПР
          </Button>
          <Gap size="l" />
        </div>
      )}
    </div>
  );
}
