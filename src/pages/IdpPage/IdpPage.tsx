import { Gap } from "../../components/ui-kit";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import MentorArea from "../../components/MentorArea/MentorArea";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import CommentsList from "../../components/CommentsList/CommentsList";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import NoTaskMessage from "../../components/NoTaskMessage/NoTaskMessage";
import style from "./IdpPage.module.scss";
import IdpCommentSending from "../../components/IdPCommentSending/IdpCommentSending";

const IdpPage = () => {
  const activeIPRs = false;

  const value = {
    badge: "no",
    title: "bold",
    subTitle: "no",
    button: "no",
    width: "nolimit",
    mechanics: "close",
  };

  return (
    <div>
      <MentorArea status="blue" />
      <Gap size="2xl" />
      <EmployeeCard activeIPRs={!activeIPRs} />
      <TaskDescription />
      <div className={style.leftContainer}>
        <NoTaskMessage />
        <Gap size="2xl" />
        <PlateWrapper
          value={value}
          view="positive"
          titleText="Оставьте свой комментарий"
          text="Здесь будут отображаться комментарии ко всему плану развития. Если же вы
      хотите оставить комментарий к конкретной задаче, откройте нужную вам
      задачу."
        />
        <Gap size="xl" />
        <CommentsList>Времянка под комменты</CommentsList>
        <Gap size="3xl" />
        <IdpCommentSending />
      </div>
      <Gap size="7xl" />
    </div>
  );
};

export default IdpPage;
