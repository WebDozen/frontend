import { Circle, NoShape, Typography } from "../ui-kit";
import style from "../EmployeeCard/EmployeeCard.module.scss";
import styles from "./EmployeeInfo.module.scss";
import avatar from "../../images/employeeAvatar.png";
import { useLocation } from "react-router-dom";
import iconCalendar from "../../images/iconCalendar.svg";
import { STATUSES } from "../../utils/constants";

export default function EmployeeInfo() {
  const { pathname } = useLocation();
  const status: STATUSES = STATUSES.Done;
  const date = (status as STATUSES) === "red" ? 
  "Истек" : "31.12.2025";

  return (
    <div className={style.info}>
      <div className={style.infoBlock}>
        <div className={style.infoEmployee}>
          <Circle size={64} imageUrl={avatar} />
          <div className={style.infoDescription}>
            <h5 className={style.infoDescriptionName}>
              Максимова Дарья Олеговна
            </h5>
            <p className={style.infoDescriptionGrade}>
              Frontend-разработчик, Middle
            </p>
          </div>
        </div>
        <div className={style.dividerCustom}></div>

        {pathname === "/employee/1" ? (
          <>
            <div className={style.infoIdp}>
              <h5 className={style.infoIdpAmount}>2 ИПР</h5>
              <p className={style.infoPIdponeStatus}>Выполнено</p>
            </div>
          </>
        ) : (
          <div className={styles.block}>
            <div className={styles.date}>
              <NoShape
                size={48}
                imageUrl={iconCalendar}
                backgroundColor="transparent"
              />
              <div className={styles.dateArea}>
                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  defaultMargins={false}
                  color="secondary"
                  style={{ fontFamily: "SF Pro Text" }}
                >
                  Срок выполнения
                </Typography.Text>
                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  defaultMargins={false}
                  color="primary"
                  weight="bold"
                  style={{ fontFamily: "SF Pro Text" }}
                >
                  {date}
                </Typography.Text>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
