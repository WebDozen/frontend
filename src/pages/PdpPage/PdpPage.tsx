import { Gap } from "../../components/ui-kit";
import { useState } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import MentorArea from "../../components/MentorArea/MentorArea";
import TaskDescription from "../../components/TaskDescription/TaskDescription";

const PdpPage = () => {
  const [activeIPRs, setActiveIPRs] = useState(false);

  return (
    <div>
      <MentorArea />
      <Gap size="2xl" />
      <EmployeeCard activeIPRs={!activeIPRs} />
      <TaskDescription />
      {/* <Comments /> */}
    </div>
  );
};

export default PdpPage;
