import { getIdpData } from "../../services/selectors";
import styles from "./MentorArea.module.scss";
import MentorInfo from "./MentorInfo/MentorInfo";
import ButtonsIdpBlock from "../ButtonsIdpBlock/ButtonsIdpBlock";
import { useAppSelector } from "../../services/hook";

const MentorArea = () => {
  const { idp } = useAppSelector(getIdpData);

  const showMentorInfo = idp.mentor !== null;

  return (
    <div className={styles.mentorCopyAreaBlock}>
      {showMentorInfo && (
        <>
          <MentorInfo />
          <ButtonsIdpBlock />
        </>
      )}
    </div>
  );
};

export default MentorArea;
