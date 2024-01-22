import { Circle } from ".."
import style from "../EmployeeCard/EmployeeCard.module.scss"
import avatar from "../../images/employeeAvatar.png"

export default function EmployeeInfo() {
  return (
    <div className={style.info}>
      <div className={style.infoBlock}>
        <div className={style.infoEmployee}>
          <Circle size={64} imageUrl={avatar} />
          <div className={style.infoDescription}>
            <h5 className={style.infoDescriptionName}>
              Максимова Дарья Олеговна
            </h5>
            <p className={style.infoDescriptionGrade}>
              Frontend-разработчик, Middle
            </p>
          </div>
        </div>
        <div className={style.dividerCustom}></div>
        <div className={style.infoPDP}>
          <h5 className={style.infoPDPAmount}>2 ИПР</h5>
          <p className={style.infoPDPDoneStatus}>Выполнено</p>
        </div>
      </div>
    </div>
  )
}
