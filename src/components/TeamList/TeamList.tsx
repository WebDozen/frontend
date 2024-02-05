import {
  Circle,
  Gap,
  Typography,
  Table,
  TableCustomWrapper,
  StatusComponent,
} from "../ui-kit";
import mentorIcon from "./../../images/personalManagerIcon.svg";
import chevronIcon from "./../../images/chevron-left-shift-right_s.svg";
import s from "./TeamList.module.scss";
import znak from "../../images/znak.svg";

import avatar from "./../../images/employeeAvatar.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hook";
import { getEmployeesListData } from "../../services/selectors";
import type { TypeEmployeesItem } from "../../services/employeesList/slice";

const TeamList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { list: users } = useAppSelector(getEmployeesListData);

  const titleThirdRow =
    pathname === `/mentor/employee/${id}` ? "Нет задач" : "Ментор";
  const showMentorIcon = pathname !== `/mentor/employee/${id}`;

  const styleTableCell = {
    padding: "var(--gap-2xl) var(--gap-s) var(--gap-xl) ",
  };

  const handleClickEmployee: (id: string | number) => void = (id) => {
    navigate(`/employee/${id}`);
  };

  const tableRowElement = (user: TypeEmployeesItem) => (
    <Table.TRow key={user.id} onClick={() => handleClickEmployee(user.id)}>
      <Table.TCell className={s.tableCell}>
        <div className={s.tableUser}>
          <Circle size={40} imageUrl={avatar} />
          <Gap size="m" direction="horizontal" />
          <Typography.Text view="primary-small" tag="span">
            {`${user.last_name} ${user.first_name} ${user.middle_name} `}
          </Typography.Text>
        </div>
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        <Typography.Text view="primary-small" tag="span">
          {`${user.position}, ${user.grade}  `}
        </Typography.Text>
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        {showMentorIcon && user.mentor ? (
          <img src={mentorIcon} alt="mentor" />
        ) : null}
        {!user.idp.has_task && (
          <img src={znak} alt="Иконка восклицательного знака" />
        )}
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        <div className={s.status}>
          <StatusComponent slag_idp={user.idp.status} />
          <img src={chevronIcon} alt="шеврон вправо" />
        </div>
      </Table.TCell>
    </Table.TRow>
  );
  return (
    <div>
      <TableCustomWrapper>
        <Table.THead>
          <Table.THeadCell
            className={s.tableHeadCell}
            title="НАЗВАНИЕ ИПР"
            width={404}
            style={styleTableCell}
          >
            СОТРУДНИК
          </Table.THeadCell>

          <Table.THeadCell
            className={s.tableHeadCell}
            title="СРОК ВЫПОЛНЕНИЯ"
            width={416}
            style={styleTableCell}
          >
            ДОЛЖНОСТЬ, ГРЕЙД
          </Table.THeadCell>

          <Table.THeadCell
            className={s.tableHeadCell}
            title="МЕНТОР"
            style={styleTableCell}
          >
            {titleThirdRow}
          </Table.THeadCell>

          <Table.THeadCell
            className={s.tableHeadCell}
            width={240}
            title="СТАТУС ПОСЛЕДНЕГО ИПР"
            style={styleTableCell}
          >
            СТАТУС ПОСЛЕДНЕГО ИПР
          </Table.THeadCell>
        </Table.THead>

        <Table.TBody>
          {users.length >= 1
            ? users.map((user) => tableRowElement(user))
            : null}
        </Table.TBody>
      </TableCustomWrapper>
    </div>
  );
};

export default TeamList;
