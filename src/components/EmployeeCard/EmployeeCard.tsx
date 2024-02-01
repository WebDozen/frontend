import style from "./EmployeeCard.module.scss";
import InfoProgressNoIdp from "../InfoProgressNoIdp/InfoProgressNoIdp";
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import { useAppSelector } from "../../services/hook";
import { getEmployeeData } from "../../services/selectors";
import { TYPE_SLAG_IDP } from "../../utils/constants";

export default function EmployeeCard() {
  const {
    employee: {
      idp: { status: idp_status, total_tasks_count: tasks_count },
    },
    loading,
    error,
  } = useAppSelector(getEmployeeData);

  return (
    <div className={style.employeeCard}>
      <EmployeeInfo />
      {(tasks_count === 0 && idp_status !== TYPE_SLAG_IDP.open) ||
      idp_status === "cancelled" ||
      idp_status === "expired" ||
      idp_status === "completed" ? (
        <InfoProgressNoIdp />
      ) : (
        <InfoProgressStatusBar />
      )}
    </div>
  );
}
