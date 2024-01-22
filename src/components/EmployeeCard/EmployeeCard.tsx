import style from "./EmployeeCard.module.scss"
import InfoProgressNoPDP from "../InfoProgressNoPDP/InfoProgressNoPDP"
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar"
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo"

interface CardProps {
  activeIPRs: boolean
}

export default function EmployeeCard({ activeIPRs }: CardProps) {
  return (
    <div className={style.employeeCard}>
      <EmployeeInfo />
      {!activeIPRs && <InfoProgressNoPDP />}
      {activeIPRs && <InfoProgressStatusBar />}
    </div>
  )
}
