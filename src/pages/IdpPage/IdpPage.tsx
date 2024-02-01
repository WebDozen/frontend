import { Gap } from "../../components/ui-kit";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import MentorArea from "../../components/MentorArea/MentorArea";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import CommentsList from "../../components/CommentsList/CommentsList";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import NoTaskMessage from "../../components/NoTaskMessage/NoTaskMessage";
import style from "./IdpPage.module.scss";
import IdpCommentSending from "../../components/IdpCommentSending/IdpCommentSending";
import { useAppDispatch } from "../../services/hook";
import { useEffect } from "react";
import { getIdpByID } from "../../services/actions";
import { useParams } from "react-router-dom";

const IdpPage = () => {
  type Params = {
    id: string;
  };
  
  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
   // dispatch(getEmployeeByID(id));
    dispatch(getIdpByID(id));
  }, [dispatch]);

  const plateSuccess = {
    hasButton: false,
    hasCloser: true,
  };

  return (
    <>
      <MentorArea status="blue" />
      <Gap size="2xl" />
      <EmployeeCard />
      <Gap size="3xl" />
      <TaskDescription />
      <div className={style.leftContainer}>
        {/*<NoTaskMessage />*/}
        <Gap size="2xl" />
        <PlateWrapper
          config={plateSuccess}
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
    </>
  );
};

export default IdpPage;
