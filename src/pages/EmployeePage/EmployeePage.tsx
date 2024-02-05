import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IdpList from "../../components/IdpList/IdpList";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import { Gap } from "../../components/ui-kit";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getEmployeeData } from "../../services/selectors";
import { getEmployeeByID, getIdps } from "../../services/actions";
import { TYPE_SLAG_IDP } from "../../utils/constants";
import style from "../AddIdpPage/AddIdpPage.module.scss";

const EmployeePage = () => {
  type Params = {
    id: string;
  };

  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeeByID(id));
    dispatch(getIdps(id));
  }, [dispatch]);

  const {
    employee: {
      idp: { status: idp_status },
    },
    employee,
  } = useAppSelector(getEmployeeData);

  const status: string = idp_status;

  const plateSuccess = {
    hasBadge: "positive",
    hasButton: false,
    hasCloser: true,
  };
  const plateAttention = {
    hasBadge: "attention",
    hasButton: false,
    hasCloser: true,
  };

  return (
    <>
      <div className={style.content}>
        <Gap size="3xl" />
        <EmployeeCard />
        <Gap size="2xl" />
        {status === TYPE_SLAG_IDP.completed && (
          <PlateWrapper
            config={plateSuccess}
            view="positive"
            titleText="Сотрудник выполнил все ИПР"
            text="Пришло время создать новый план развития и двигаться к новым целям!"
          />
        )}
        {status === "expired" && (
          <PlateWrapper
            config={plateAttention}
            view="attention"
            titleText="Сотрудник не выполнил последний ИПР"
            text="Возможно, задач было слишком много? Узнайте у сотрудника, что пошло не так, и составьте новый план для развития"
          />
        )}
        {employee.idp.total_idp_count === 0 ? <NewPlanMessage /> : <IdpList />}
      </div>
    </>
  );
};

export default EmployeePage;
