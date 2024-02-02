import { Circle, PersonalManagerMIcon } from "../../ui-kit";
import styles from "./MentorInfo.module.scss";
import style from "../../EmployeeCard/EmployeeCard.module.scss";
import managerIcon from "../../../images/mentorAva.svg";
import { useAppSelector } from "../../../services/hook";
import { getIdpData } from "../../../services/selectors";

const MentorInfo = () => {
  const {
    idp : {mentor: mentor}, 
    loading,
    error,
  } = useAppSelector(getIdpData);

  return (
    <div className={styles.mentorAreaBlock}>
      <div className={styles.block}>
        <Circle size={32} imageUrl={managerIcon} />

        <div className={style.infoDescription}>
          <div className={styles.iconAndName}>
            <PersonalManagerMIcon className={styles.icon} />
            <h5 className={style.infoDescriptionName}>
            {mentor !== null ?`${mentor.first_name} ${mentor.middle_name} ${mentor.last_name} `: ''}
            </h5>
          </div>
          <p className={style.infoDescriptionGrade}>
          {mentor !== null ?`${mentor.position}, ${mentor.grade}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorInfo;
