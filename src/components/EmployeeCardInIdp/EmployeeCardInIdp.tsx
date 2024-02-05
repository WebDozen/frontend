import style from "../EmployeeCard/EmployeeCard.module.scss";
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

export default function EmployeeCardInIdp() {
  return (
    <div className={style.employeeCard}>
      <EmployeeInfo />
      <InfoProgressStatusBar />
    </div>
  );
}
