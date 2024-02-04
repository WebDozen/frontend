import { Circle, NoShape, Skeleton, Typography } from "../ui-kit";
import style from "../EmployeeCard/EmployeeCard.module.scss";
import styles from "./EmployeeInfo.module.scss";
import avatar from "../../images/employeeAvatar.png";
import { useLocation, useParams } from "react-router-dom";
import iconCalendar from "../../images/iconCalendar.svg";
import { getEmployeeData, getIdpData } from "../../services/selectors";
import { useAppSelector } from "../../services/hook";
import { TYPE_SLAG_IDP } from "../../utils/constants";

export default function EmployeeInfo() {
  const { pathname } = useLocation();
  const { id } = useParams();

  const { employee, loading, } = useAppSelector(getEmployeeData);

  const { idp } = useAppSelector(getIdpData);

  const employeePage = pathname === `/employee/${id}`;
  const addIdpPage = pathname === `/employee/${id}/add_idp`;

  const date =
    idp.status.slug === TYPE_SLAG_IDP.expired
      ? "Истек"
      : new Date(idp.deadline).toLocaleDateString("ru-RU") === "01.01.1970"
        ? ""
        : new Date(idp.deadline).toLocaleDateString("ru-RU");

  return (
    <div className={style.info}>
      <div className={style.infoBlock}>
        <div className={style.infoEmployee}>
          <Circle size={64} imageUrl={avatar} />
          <Skeleton visible={loading}>
            <div className={style.infoDescription}>
              <h5 className={style.infoDescriptionName}>
                {`${employee.last_name} ${employee.first_name} ${employee.middle_name} `}
              </h5>
              <p className={style.infoDescriptionGrade}>
                {`${employee.position}, ${employee.grade}  `}
              </p>
            </div>
          </Skeleton>
        </div>
        <div className={style.dividerCustom}></div>

        {employeePage || addIdpPage ? (
          <Skeleton visible={loading}>
            <>
              <div className={style.infoIdp}>
                <h5 className={style.infoIdpAmount}>
                  {`${employee.idp.total_completed_idps}`} ИПР
                </h5>
                <p className={style.infoPIdponeStatus}>Выполнено</p>
              </div>
            </>
          </Skeleton>
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
                <Skeleton visible={loading}>
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
                </Skeleton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
