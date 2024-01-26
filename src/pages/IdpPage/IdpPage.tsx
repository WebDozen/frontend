import { Gap } from "../../components/ui-kit";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import MentorArea from "../../components/MentorArea/MentorArea";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import CommentsList from "../../components/CommentsList/CommentsList";
import IdpCommentSending from "../../components/IdpCommentSending/IdpCommentSending";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";

const IdpPage = () => {
  const activeIPRs = false;

  return (
    <div>
      <MentorArea status="blue" />
      <Gap size="2xl" />
      <EmployeeCard activeIPRs={!activeIPRs} />
      <TaskDescription />
      <Gap size="2xl" />
      <PlateWrapper />
      <Gap size="xl" />
      <CommentsList>Времянка под комменты</CommentsList>
      <Gap size="3xl" />
      <IdpCommentSending />
      <Gap size="7xl" />
    </div>
  );
};

export default IdpPage;
