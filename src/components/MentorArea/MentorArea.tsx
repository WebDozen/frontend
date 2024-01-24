import { Circle, CopyMIcon, IconButton, PersonalManagerMIcon } from ".."
import styles from "./MentorArea.module.scss"
import style from "../EmployeeCard/EmployeeCard.module.scss"
import managerIcon from "../../images/mentorAva.svg"

export default function MentorArea() {
  return (
    <div className={styles.mentorCopyAreaBlock}>
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
      <IconButton
        view="primary"
        size={56}
        icon={CopyMIcon}
        style={{
          backgroundColor: "rgba(15, 25, 55, 0.1)",
          borderRadius: "12px",
          backdropFilter: "blur(40px)",
        }}
      />
    </div>
  )
}
