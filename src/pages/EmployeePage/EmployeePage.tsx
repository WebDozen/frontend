import IdpList from "../../components/IdpList/IdpList";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import { Gap } from "../../components/ui-kit";
import MentorInfo from "../../components/MentorArea/MentorInfo/MentorInfo";
import TabsCustomMentor from "../../components/TabsCustomMentor/TabsCustomMentor";

const EmployeePage = () => {
  const activeIPRs = false;
  const status: string = "green";
  const role = "mentor";
  const has_task = false;

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
      <IdpList />
      {has_task === false && <NewPlanMessage />}
    </>
  );
};

export default EmployeePage;
