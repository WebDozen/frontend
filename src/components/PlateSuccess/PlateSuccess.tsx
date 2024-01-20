import styles from "./PlateSuccess.module.scss"
import iconDone from "../../images/badge_Icon_Light.svg"
import iconClose from "../../images/iconCloseButton.svg"

export default function PlateSuccess() {
  return (
    <div className={styles.plateBlock}>
      <img
        src={iconDone}
        className={styles.iconGreenDone}
        alt="Иконка галочки на зеленом фоне"
      />
      <div className={styles.textBlock}>
        <h3 className={styles.textTitle}>Сотрудник завершил все ИПР.</h3>
        <p className={styles.textMotivation}>
          Пришло время создать новый план развития и двигаться к новым целям!
        </p>
      </div>
      <button className={styles.iconClose} type="button">
        <img src={iconClose} alt="Кнопка закрытия" />
      </button>
    </div>
  )
}
