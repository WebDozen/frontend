import { useState } from "react"
import style from "./EmployeeCard.module.scss"
import avatar from "../../images/employeeAvatar.png"
import InfoProgressNoPDP from "../InfoProgressNoPDP/InfoProgressNoPDP"
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar"

interface CardProps {
  activeIPRs: boolean
}

export default function EmployeeCard({ activeIPRs }: CardProps) {
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
          <div className={style.dividerCustom}></div>
          <div className={style.infoPDP}>
            <h5 className={style.infoPDPAmount}>2 ИПР</h5>
            <p className={style.infoPDPDoneStatus}>Выполнено</p>
          </div>
        </div>
      </div>
      {!activeIPRs && <InfoProgressNoPDP />}
      {activeIPRs && <InfoProgressStatusBar />}
    </div>
  )
}
