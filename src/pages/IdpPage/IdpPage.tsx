import { Gap } from "../../components/ui-kit";
import MentorArea from "../../components/MentorArea/MentorArea";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import CommentsList from "../../components/CommentsList/CommentsList";
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper";
import style from "./IdpPage.module.scss";

import { useAppDispatch } from "../../services/hook";
import { useEffect } from "react";
import { getEmployeeByID, getIdpByID} from "../../services/actions";
import { useParams } from "react-router-dom";
import EmployeeCardInIdp from "../../components/EmployeeCardInIdp/EmployeeCardInIdp";
import IdpCommentSending from "../../components/IdpCommentSending/IdpCommentSending";
import styles from '../AddIdpPage/AddIdpPage.module.scss';

const IdpPage = () => {
  type Params = {
    id: string;
    idp_id: string;
  };

  const { id } = useParams<Params>();
  const { idp_id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeeByID(id));
    dispatch(getIdpByID({ id, idp_id }));
  }, [dispatch]);

  const plateSuccess = {
    hasButton: false,
    hasCloser: true,
  };

  console.log(idp_id);

  return (
    <>
               <div className={styles.content}>
      <MentorArea />
      <Gap size="2xl" />
      <EmployeeCardInIdp />
      <Gap size="3xl" />
      <TaskDescription />
      <div className={style.leftContainer}>
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
      </div>
    </>
  );
};

export default IdpPage;
