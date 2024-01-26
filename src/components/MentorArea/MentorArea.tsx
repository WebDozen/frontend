import {
  Button,
  Circle,
  CopyMIcon,
  Gap,
  IconButton,
  PencilMIcon,
  PersonalManagerMIcon,
} from "../ui-kit";
import styles from "./MentorArea.module.scss";
import style from "../EmployeeCard/EmployeeCard.module.scss";
import managerIcon from "../../images/mentorAva.svg";

interface statusProps {
  status: string;
}

const MentorArea = ({ status }: statusProps) => {
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
      {(status === "green" || status === "grey") && (
        <IconButton
          view="primary"
          size={56}
          icon={CopyMIcon}
          style={{
            backgroundColor: "rgba(15, 25, 55, 0.1)",
          }}
        />
      )}
      {(status === "blue" || status === "teal") && (
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
      {status === "reg" && (
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
      )}
    </div>
  );
};

export default MentorArea;
