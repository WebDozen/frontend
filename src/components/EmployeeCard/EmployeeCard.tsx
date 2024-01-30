import style from "./EmployeeCard.module.scss";
import InfoProgressNoIdp from "../InfoProgressNoIdp/InfoProgressNoIdp";
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import type { Employee } from "../../services/employee/slice";

interface CardProps {
  activeIPRs: boolean;
}

export default function EmployeeCard({ activeIPRs }: CardProps) {
  return (
    <div className={style.employeeCard}>
      <EmployeeInfo />
      {!activeIPRs ? <InfoProgressNoIdp /> : <InfoProgressStatusBar />}
    </div>
  );
}
