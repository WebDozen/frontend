import style from "./EmployeeCard.module.scss";
import InfoProgressNoIdp from "../InfoProgressNoIdp/InfoProgressNoIdp";
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import PlateWrapper from "../PlateWrapper/PlateWrapper";

interface CardProps {
  activeIPRs: boolean;
}

//если на странице создания ипр
// const plateConfig = {
//   hasButton: true,
//   hasCloser: false,
// };
// <PlateWrapper
//   config={plateConfig}
//   view="positive"
//   titleText="Посмотрите текущий грейд сотрудника"
// />;

export default function EmployeeCard({ activeIPRs }: CardProps) {
  return (
    <div className={style.employeeCard}>
      <EmployeeInfo />
      {!activeIPRs ? <InfoProgressNoIdp /> : <InfoProgressStatusBar />}
    </div>
  );
}
