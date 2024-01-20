import style from "./EmployeeCard.module.scss"
import avatar from "../../images/employeeAvatar.png"
import iconCalendar from "../../images/iconCalendar.svg"

export default function EmployeeCard() {
  return (
    <div className={style.employeeCard}>
      <div className={style.info}>
        <div className={style.infoBlock}>
          <div className={style.infoEmployee}>
            <img
              className={style.infoIcon}
              src={avatar}
              alt="Фото сотрудника"
            />
            <div className={style.infoDescription}>
              <h5 className={style.infoDescriptionName}>
                Максимова Дарья Олеговна
              </h5>
              <p className={style.infoDescriptionGrade}>
                Frontend-разработчик, Middle
              </p>
            </div>
          </div>
          <div className={style.divider}></div>
          <div className={style.infoPDP}>
            <h5 className={style.infoPDPAmount}>2 ИПР</h5>
            <p className={style.infoPDPDoneStatus}>Выполнено</p>
          </div>
        </div>
      </div>
      <div className={style.infoProgress}>
        <img
          className={style.infoProgressIcon}
          src={iconCalendar}
          alt="Иконка прогресса"
        />
        <p className={style.infoProgressStatus}>Нет активных ИПР</p>
      </div>
    </div>
  )
}
