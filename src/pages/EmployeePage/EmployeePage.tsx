import IdpList from "../../components/IdpList/IdpList";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import { Gap } from "../../components/ui-kit";
import MentorInfo from "../../components/MentorArea/MentorInfo/MentorInfo";
import TabsCustomMentor from "../../components/TabsCustomMentor/TabsCustomMentor";

interface Props {
  role: string;
}

const EmployeePage = ({role}: Props) => {
  const activeIPRs = true;
  const status: string = "green";

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
      {role === "mentor" && (
        <div>
          <MentorInfo />
          <Gap size="2xl" />
        </div>
      )}
      <EmployeeCard activeIPRs={activeIPRs} />
      <Gap size="2xl" />
      {role === "mentor" && <TabsCustomMentor />}
      {/* !! если все выполнены или отменены,то показываем зеленую плашку только тогда.
       нужно будет переделать !! */}
      {status === "green" && (
        <PlateWrapper
          config={plateSuccess}
          view="positive"
          titleText="Сотрудник выполнил все ИПР"
          text="Пришло время создать новый план развития и двигаться к новым целям!"
        />
      )}
      {status === "red" && (
        <PlateWrapper
          config={plateAttention}
          view="attention"
          titleText="Сотрудник не выполнил последний ИПР"
          text="Возможно, задач было слишком много? Узнайте у сотрудника, что пошло не так, и составьте новый план для развития"
        />
      )}

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
            {(role === "employee" && !activeIPRs) ? 
      <NewPlanMessage /> :
      <IdpList />}
    </>
  );
};

export default EmployeePage;
