import style from "./InfoProgressNoPDP.module.scss"
import iconCalendar from "../../images/iconCalendar.svg"

export default function InfoProgressNoPDP() {
  return (
    <div className={style.infoProgress}>
      <img
        className={style.infoProgressIcon}
        src={iconCalendar}
        alt="Иконка прогресса"
      />
      <p className={style.infoProgressStatus}>Нет активных ИПР</p>
    </div>
  )
}
