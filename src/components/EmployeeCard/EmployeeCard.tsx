import { useState } from "react"
import style from "./EmployeeCard.module.scss"
import avatar from "../../images/employeeAvatar.png"
import InfoProgressNoPDP from "../InfoProgressNoPDP/InfoProgressNoPDP"
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar"

interface CardProps {
  activeIPRs: boolean
}
export default function EmployeeCard({ activeIPRs }: CardProps) {
  // const [activeIPRs, setActiveIPRs] = useState(false);
  //const [activeIPR, setActiveIPR] = useState(true);
  console.log(activeIPRs)

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
          <svg
            width="1"
            height="64"
            viewBox="0 0 1 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.25"
              y1="1.09278e-08"
              x2="0.249997"
              y2="64"
              stroke="#090C25"
              stroke-opacity="0.28"
              stroke-width="0.5"
            />
          </svg>
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
