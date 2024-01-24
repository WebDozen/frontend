import { Circle, IconButton } from ".."
import styles from "../PlateSuccess/PlateSuccess.module.scss"
import styleOrange from "./PlateFail.module.scss"
import iconClose from "../../images/iconCloseButton.svg"
import iconFail from "../../images/iconFail.svg"

export default function PlateFail() {
  return (
    <div className={styleOrange.plateBlock}>
      <img
        src={iconFail}
        className={styles.iconGreenDone}
        alt="Иконка ! на оранжевом фоне"
      />

      <div className={styles.textBlock}>
        <h3 className={styles.textTitle}>
          Сотрудник не выполнил последний ИПР.
        </h3>
        <p className={styles.textMotivation}>
          Возможно задач было слишком много? Узнайте у сотрудника, что пошло не
          так, и составьте новый план для развития.
        </p>
      </div>
      <IconButton
        size={32}
        className={styles.iconClose}
        icon={
          <Circle
            size={32}
            backgroundColor={"transparent"}
            imageUrl={iconClose}
          />
        }
      />
    </div>
  )
}
