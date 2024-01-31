import IdpList from "../../components/IdpList/IdpList";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import { Gap } from "../../components/ui-kit";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getEmployeeData } from "../../services/selectors";
import MentorInfo from "../../components/MentorArea/MentorInfo/MentorInfo";
import TabsCustomMentor from "../../components/TabsCustomMentor/TabsCustomMentor";
import { useEffect } from "react";
import { getEmployeeByID, getIdps } from "../../services/actions";
import { useParams } from "react-router-dom";

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
    employee:  {is_mentor,
      idp: {status: idp_status},
     }, employee,
    loading,
    error,
  } = useAppSelector(getEmployeeData);

  useEffect(() => {
  console.log(employee)
  }, [employee]);

  const total_count_iprs = 1;
  const status: string = idp_status;
  const activeIPRs = (status !== "done" && status !== "cancelled");

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
      {is_mentor && (
        <div>
          <MentorInfo />
          <Gap size="2xl" />
        </div>
      )}
      <EmployeeCard activeIPRs={activeIPRs} />
      <Gap size="2xl" />
      {is_mentor && <TabsCustomMentor />}
      {/* !! если все выполнены или отменены,то показываем зеленую плашку только тогда.
       нужно будет переделать !! */}
      {(status === "done" || status === "cancelled") && (
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

{(total_count_iprs === 0) ? 
      <NewPlanMessage /> :
      <IdpList />}

      {/* Плашки для сотрудника
{status === "green" && (
        <PlateWrapper
          config={plateSuccess}
          view="positive"
          titleText="Вы выполнили все ИПР"
          text="Пришло время создать новый план развития и двигаться к новым целям!"
        />
      )}
      {status === "red" && (
        <PlateWrapper
          config={plateAttention}
          view="attention"
          titleText="Вы не выполнили последний ИПР"
          text="Возможно, задач было слишком много? Обратитесь к руководителю, и составьте новый план для развития"
        />
      )}
      {status === "grey" && (
        <PlateWrapper
          config={plateAttention}
          view="attention"
          titleText="Ваш последний ИПР был отменен"
          text="Узнайте у руководителя или ментора в чем причина отмены, и составьте новый план для развития!"
        />
      )} */}
    </>
  );
};

export default EmployeePage;
