import IdpList from "../../components/IdpList/IdpList";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import PlateSuccess from "../../components/PlateSuccess/PlateSuccess";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";
import PlateFail from "../../components/PlateFail/PlateFail";
import IpdForm from "../../components/IpdForm/IpdForm";

const EmployeePage = () => {
  const activeIPRs = false;

  return (
    <div>
      <EmployeeCard activeIPRs={activeIPRs} />
      <IpdForm />
      {/* <PlateSuccess />
      <DPDList />
      <NewPlanMessage /> */}
      {/* <EmployeeCard activeIPRs={!activeIPRs} />
      <PlateFail /> */}
    </div>
  );
};

export default EmployeePage;
