import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";
import { TYPE_SLAG_IDP, TYPE_SLAG_TASK } from "../../utils/constants";
import { Button, CopyMIcon, Gap, IconButton, PencilMIcon } from "../ui-kit";
import styles from "./MentorArea.module.scss";
import MentorInfo from "./MentorInfo/MentorInfo";

const MentorArea = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { idp_id } = useParams();

  const {
    idp : {tasks: tasks}, idp,
    loading,
    error,
  } = useAppSelector(getIdpData);

  const showMentorInfo = idp.mentor !== null;
  const showEditButton = idp.status.slug === TYPE_SLAG_IDP.in_progress || 
  idp.status.slug === TYPE_SLAG_IDP.awaiting_review || 
  idp.status.slug === TYPE_SLAG_IDP.expired || idp.status.slug === TYPE_SLAG_IDP.open;
  const showCancelButton = idp.status.slug === TYPE_SLAG_IDP.in_progress || idp.status.slug === TYPE_SLAG_IDP.open;
  const showFinishButton = idp.status.slug === TYPE_SLAG_IDP.awaiting_review;

  const handleButtonClick: () => void = () => {
    navigate(`/employee/${id}/idp/${idp_id}/success`);


  return ( 
    <div className={styles.mentorCopyAreaBlock}>
    {showMentorInfo && 
    <MentorInfo />
    }
      <div className={styles.buttonsBlock}>
          <div className={styles.littleButtonsBlock}>
          {showEditButton &&
            <IconButton
              view="primary"
              size={56}
              icon={PencilMIcon}
              style={{
                backgroundColor: "rgba(15, 25, 55, 0.1)",
              }}
            />}
            
            <IconButton
              view="primary"
              size={56}
              icon={CopyMIcon}
              style={{
                backgroundColor: "rgba(15, 25, 55, 0.1)",
              }}
            />
          </div>
          { showFinishButton &&
          <Button view="primary" className={styles.button} onClick={(e: any) => handleButtonClick()}>
            Завершить ИПР
          </Button>}
          {showCancelButton && <Button view="primary" className={styles.button} onClick={(e: any) => {handleButtonClick()}}>
            Отменить
          </Button>}
          </div>
      
  {/*  {idp.status.slug !== TYPE_SLAG_IDP.none  && 
        <IconButton
          view="primary"
          size={56}
          icon={CopyMIcon}
          style={{
            backgroundColor: "rgba(15, 25, 55, 0.1)",
          }}
        />
      }
      {(idp.status.slug === TYPE_SLAG_IDP.in_progress || idp.status.slug === TYPE_SLAG_IDP.awaiting_review 
      || idp.status.slug === TYPE_SLAG_IDP.expired || idp.status.slug === TYPE_SLAG_IDP.open) && (
        <div className={styles.buttonsBlock}>
          <div className={styles.littleButtonsBlock}>
            <IconButton
              view="primary"
              size={56}
              icon={PencilMIcon}
              style={{
                backgroundColor: "rgba(15, 25, 55, 0.1)",
              }}
            />
            <IconButton
              view="primary"
              size={56}
              icon={CopyMIcon}
              style={{
                backgroundColor: "rgba(15, 25, 55, 0.1)",
              }}
            />
          </div>
          <Button view="primary" className={styles.button}>
            Отменить
          </Button>
        </div>
      )}
      {status === "orange" && (
        <div className={styles.buttonsBlock}>
          <div className={styles.littleButtonsBlock}>
            <IconButton
              view="primary"
              size={56}
              icon={PencilMIcon}
              style={{
                backgroundColor: "rgba(15, 25, 55, 0.1)",
              }}
            />
            <IconButton
              view="primary"
              size={56}
              icon={CopyMIcon}
              style={{
                backgroundColor: "rgba(15, 25, 55, 0.1)",
              }}
            />
          </div>
          <Button view="primary" className={styles.button}>
            Завершить ИПР
          </Button>
        </div>
      )}
      {status === "red" && (
        <div className={styles.littleButtonsBlock}>
          <IconButton
            view="primary"
            size={56}
            icon={PencilMIcon}
            style={{
              backgroundColor: "rgba(15, 25, 55, 0.1)",
            }}
          />
          <IconButton
            view="primary"
            size={56}
            icon={CopyMIcon}
            style={{
              backgroundColor: "rgba(15, 25, 55, 0.1)",
            }}
          />
        </div>
          )} */}
    </div>
  );
};}

export default MentorArea;