import {
  Table,
  Typography,
  Status,
  TableCustomWrapper,
  StatusComponent,
} from "../ui-kit";
import styles from "./IdpList.module.scss";

import mentorIcon from "../../images/personalManagerIcon.svg";
import znak from "../../images/znak.svg";
import chevron from "../../images/chevron-left-shift-right_s.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { TypeIDP } from "../../services/idp/types";
import { getIdpsListData } from "../../services/selectors";
import { useAppSelector } from "../../services/hook";

const IdpList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { idpsList} = useAppSelector(getIdpsListData);
  const { id } = useParams();

  const handleClickIdp: (idp_id: string | number) => void = (idp_id) => {
    navigate(`/employee/${id}/idp/${idp_id}`);
  };

  const tableRowElement = (idp: TypeIDP) => (
    <Table.TRow key={idp.id} onClick={() => handleClickIdp(idp.id)}>
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
          {new Date(idp.deadline).toLocaleDateString("ru-RU") === "01.01.1970"
            ? ""
            : new Date(idp.deadline).toLocaleDateString("ru-RU")}
        </Typography.Text>
      </Table.TCell>

      {pathname !== `/mentor/employee/${id}` ? 
      <Table.TCell className={styles.styleTableCell}>
        <div className={styles.statusBlock}>
          {idp.mentor && <img src={mentorIcon} alt="Иконка ментора" />}
          {!idp.tasks && <img src={znak} alt="Иконка восклицательного знака" />}
        </div>
      </Table.TCell> : <></>}

      <Table.TCell className={styles.styleTableCell}>
        <div className={styles.statusBlock}>
          {
            <>
              <StatusComponent slag_idp={idp.status.slug} />
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
          {pathname !== `/mentor/employee/${id}` ? 
          <Table.THeadCell title="МЕНТОР" width={184}>
            МЕНТОР
          </Table.THeadCell>: <></>}
          <Table.THeadCell title="СТАТУС ИПР" width={172}>
            СТАТУС ИПР
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          {idpsList.map((idp) => tableRowElement(idp)).reverse()}
        </Table.TBody>
      </TableCustomWrapper>
    </div>
  );
};

export default IdpList;
