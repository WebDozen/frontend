import IdpList from "../../components/IdpList/IdpList";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";
import IdpForm from "../../components/IdpForm/IdpForm";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import { Gap } from "../../components/ui-kit";

const EmployeePage = () => {
  const activeIPRs = false;

  const value = {
    badge: "yes",
    title: "bold",
    subTitle: "no",
    button: "no",
    width: "nolimit",
    mechanics: "close",
  };

  const status = "green";

  return (
    <div>
      <EmployeeCard activeIPRs={activeIPRs} />
      {/*<IdpForm />*/}
      {/* !! если все выполнены или отменены,то показываем зеленую плашку только тогда.
       нужно будет переделать !!*/}
      {status === "green" && (
        <PlateWrapper
          value={value}
          view="positive"
          titleText="Сотрудник выполнил все ИПР"
          text="Пришло время создать новый план развития и двигаться к новым целям!"
        />
      )}
      {status === "red" && (
        <PlateWrapper
          value={value}
          view="attention"
          titleText="Сотрудник не выполнил последний ИПР"
          text="Возможно, задач было слишком много? Узнайте у сотрудника, что пошло не так, и составьте новый план для развития"
        />
      )}
      <Gap size="2xl" />
      <IdpList />
      <NewPlanMessage />
      {/* <EmployeeCard activeIPRs={!activeIPRs} /> */}
    </div>
  );
};

export default EmployeePage;
