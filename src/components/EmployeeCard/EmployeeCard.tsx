import style from "./EmployeeCard.module.scss";
import InfoProgressNoIdp from "../InfoProgressNoIdp/InfoProgressNoIdp";
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import { useAppSelector } from "../../services/hook";

interface CardProps {
  // из листа ИПР-ов
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
