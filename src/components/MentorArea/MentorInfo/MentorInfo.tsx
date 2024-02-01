import { Circle, PersonalManagerMIcon } from "../../ui-kit";
import styles from "./MentorInfo.module.scss";
import style from "../../EmployeeCard/EmployeeCard.module.scss";
import managerIcon from "../../../images/mentorAva.svg";

const MentorInfo = () => {
  return (
    <div className={styles.mentorAreaBlock}>
      <div className={styles.block}>
        <Circle size={32} imageUrl={managerIcon} />

        <div className={style.infoDescription}>
          <div className={styles.iconAndName}>
            <PersonalManagerMIcon className={styles.icon} />
            <h5 className={style.infoDescriptionName}>
              Степанов Игорь Викторович
            </h5>
          </div>
          <p className={style.infoDescriptionGrade}>
            Frontend-разработчик, Senior
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorInfo;
