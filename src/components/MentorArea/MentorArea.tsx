import { Button, CopyMIcon, IconButton, PencilMIcon } from "../ui-kit";
import styles from "./MentorArea.module.scss";
import MentorInfo from "./MentorInfo/MentorInfo";

interface statusProps {
  status: string;
}

const MentorArea = ({ status }: statusProps) => {
  return (
    <div className={styles.mentorCopyAreaBlock}>
      <MentorInfo />
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
      )}
    </div>
  );
};

export default MentorArea;
