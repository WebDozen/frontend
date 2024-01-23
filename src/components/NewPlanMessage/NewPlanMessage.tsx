import { Button, Gap, Typography } from ".."
import styles from "./NewPlanMessage.module.scss"
import calendar from "../../images/iconCalendarNewPlan.svg"

export default function NewPlanMessage() {
  return (
    <div className={styles.newPlanBlock}>
      <img src={calendar} alt="Изображение планировщика задач" />
      <Gap size="l" />
      <Typography.Title
        view="xsmall"
        tag="h3"
        style={{ color: "#0E0E0E", maxWidth: "460px", textAlign: "center" }}
      >
        Создайте план развития для сотрудника на основе его текущего грейда
      </Typography.Title>
      <Gap size="2xl" />
      <Button view="accent" className={styles.button}>
        Создать ИПР
      </Button>
    </div>
  )
}
