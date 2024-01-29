import { Table, Typography, Status, TableCustomWrapper } from "../ui-kit";
import styles from "./IdpList.module.scss";

import mentorIcon from "../../images/personalManagerIcon.svg";
import znak from "../../images/znak.svg";
import chevron from "../../images/chevron-left-shift-right_s.svg";
import { useNavigate } from "react-router-dom";

const IdpList = () => {
  const navigate = useNavigate();

  const getCurrentDay = function (addDays: any) {
    const date = new Date();
    date.setDate(date.getDate() + addDays);
    return date;
  };

  const data = Array.from({ length: 10 }, (_, i) => i + 1).map((idx) => ({
    id: idx,
    deadline: getCurrentDay(idx),
    name: `Название ИПР ${idx}`,
  }));

  const tableRowElement = (idp: {
    id: number;
    name: string;
    // status: string;
    deadline: Date;
  }) => (
    <Table.TRow
      key={idp.id}
      onClick={(e) => {
        navigate(`/idp/${idp.id}`);
      }}
    >
      <Table.TCell className={styles.styleTableCell}>
        <Typography.Text
          view="primary-small"
          tag="p"
          defaultMargins={false}
          color="primary"
          style={{ fontFamily: "SF Pro Text" }}
        >
          {idp.name}
        </Typography.Text>
      </Table.TCell>

      <Table.TCell className={styles.styleTableCell}>
        <Typography.Text
          view="primary-small"
          tag="p"
          defaultMargins={false}
          color="primary"
          style={{ fontFamily: "SF Pro Text" }}
        >
          {idp.deadline.toLocaleDateString()}
        </Typography.Text>
      </Table.TCell>

      <Table.TCell className={styles.styleTableCell}>
        <div className={styles.statusBlock}>
          <img src={mentorIcon} alt="Иконка ментора" />
          {idp.id === 6 && (
            <img src={znak} alt="Иконка восклицательного знака" />
          )}
        </div>
      </Table.TCell>

      <Table.TCell className={styles.styleTableCell}>
        <div className={styles.statusBlock}>
          {
            <>
              {(idp.id === 1 || idp.id > 6) && (
                <Status view="contrast" color={"green"} key={"green"}>
                  ВЫПОЛНЕН
                </Status>
              )}
              {idp.id === 2 && (
                <Status view="contrast" color={"blue"} key={"blue"}>
                  В РАБОТЕ
                </Status>
              )}
              {idp.id === 3 && (
                <Status view="contrast" color={"grey"} key={0}>
                  ОТМЕНЕН
                </Status>
              )}
              {idp.id === 4 && (
                <Status view="contrast" color={"orange"} key={"orange"}>
                  НА РЕВЬЮ
                </Status>
              )}
              {idp.id === 5 && (
                <Status view="contrast" color={"red"} key={"red"}>
                  ПРОСРОЧЕН
                </Status>
              )}
              {idp.id === 6 && (
                <Status view="contrast" color={"teal"} key={"teal"}>
                  ОТКРЫТ
                </Status>
              )}
              <img
                src={chevron}
                alt="шеврон вправо"
                className={styles.chevron}
              />
            </>
          }
        </div>
      </Table.TCell>
    </Table.TRow>
  );

  return (
    <div className={styles.table}>
      <TableCustomWrapper>
        <Table.THead>
          <Table.THeadCell title="НАЗВАНИЕ ИПР" width={484}>
            НАЗВАНИЕ ИПР
          </Table.THeadCell>

          <Table.THeadCell title="СРОК ВЫПОЛНЕНИЯ" width={288}>
            СРОК ВЫПОЛНЕНИЯ
          </Table.THeadCell>

          <Table.THeadCell title="МЕНТОР" width={184}>
            МЕНТОР
          </Table.THeadCell>
          <Table.THeadCell title="СТАТУС ИПР" width={172}>
            СТАТУС ИПР
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>{data.map((idp) => tableRowElement(idp))}</Table.TBody>
      </TableCustomWrapper>
    </div>
  );
};

export default IdpList;
