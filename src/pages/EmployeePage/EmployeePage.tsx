import { useState } from "react";
import IdpList from "../../components/IdpList/IdpList";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import PlateSuccess from "../../components/PlateSuccess/PlateSuccess";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";
import PlateFail from "../../components/PlateFail/PlateFail";

const EmployeePage = () => {
  const [activeIPRs, setActiveIPRs] = useState(false);

  return (
    <div>
      <EmployeeCard activeIPRs={activeIPRs} />
      <PlateSuccess />
      <IdpList />
      <NewPlanMessage />
      <EmployeeCard activeIPRs={!activeIPRs} />
      <PlateFail />
    </div>
  );
};

export default EmployeePage;
