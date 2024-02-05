import { useLocation, useParams } from "react-router-dom";
import style from "./EmployeeCard.module.scss";
import InfoProgressNoIdp from "../InfoProgressNoIdp/InfoProgressNoIdp";
import InfoProgressStatusBar from "../InfoProgressStatusBar/InfoProgressStatusBar";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import { useAppSelector } from "../../services/hook";
import { getEmployeeData } from "../../services/selectors";
import { TYPE_SLAG_IDP } from "../../utils/constants";
import PlateWrapper from "../PlateWrapper/PlateWrapper";

const EmployeeCard = () => {
  const { pathname } = useLocation();
  const { id, idp_id } = useParams();
  const isAddIdpPage = pathname === `/employee/${id}/add_idp`;
  const isEditIdpPage = pathname === `/employee/${id}/edit_idp/${idp_id}`;

  const {
    employee: {
      idp: { status: idp_status, total_tasks_count: tasks_count },
    },
  } = useAppSelector(getEmployeeData);

  const addPlateConfig = {
    hasButton: true,
    hasCloser: false,
  };

  const addIdpPlate = (
    <PlateWrapper
      config={addPlateConfig}
      view="positive"
      titleText="Посмотрите текущий грейд сотрудника"
    />
  );

  const editPlateConfig = {
    hasButton: false,
    hasCloser: false,
    hasBadge: "attention",
  };

  const editIdpPlate = (
    <PlateWrapper
      config={editPlateConfig}
      view="attention"
      titleText="Режим редактирования"
      text="При редактировании ИПР прогресс выполнения задач в рамках ИПР может измениться"
    />
  );

  const someBoolean =
    (tasks_count === 0 && idp_status !== TYPE_SLAG_IDP.open) ||
    idp_status === "cancelled" ||
    idp_status === "expired" ||
    idp_status === "completed";

  return (
    <div className={style.employeeCard}>
      <EmployeeInfo />
      {isAddIdpPage || isEditIdpPage ? (
        (isAddIdpPage && addIdpPlate) || (isEditIdpPage && editIdpPlate)
      ) : someBoolean ? (
        <InfoProgressNoIdp />
      ) : (
        <InfoProgressStatusBar />
      )}
    </div>
  );
};

export default EmployeeCard;
