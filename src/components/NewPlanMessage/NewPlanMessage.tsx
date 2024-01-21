import { Button } from "@alfalab/core-components/button"
import { Gap } from "@alfalab/core-components/gap"
import styles from "./NewPlanMessage.module.scss"
import calendar from "../../images/iconCalendarNewPlan.svg"

export default function NewPlanMessage() {
  return (
    <div className={styles.newPlanBlock}>
      <img src={calendar} alt="Изображение планировщика задач" />
      <p className={styles.text}>
        Создайте план развития для сотрудника на основе его текущего грейда
      </p>
      <Button view="accent">Создать ИПР</Button>
    </div>
  )
}
