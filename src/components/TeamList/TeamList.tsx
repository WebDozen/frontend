import {
  Circle,
  Gap,
  Status,
  Typography,
  Table,
  TableCustomWrapper,
} from "../ui-kit";
import mentorIcon from "./../../images/personalManagerIcon.svg";
import chevronIcon from "./../../images/chevron-left-shift-right_s.svg";
import s from "./TeamList.module.scss";

import avatar from "./../../images/employeeAvatar.png";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../services/hook";
import { getEmployeesListData } from "../../services/selectors";
import type { Employees } from "../../services/employeesList/slice";

const TeamList = () => {
  const navigate = useNavigate();
  const { list: users, loading, error } = useAppSelector(getEmployeesListData);
  console.log(users, loading, error);

  const styleTableCell = {
    padding: "var(--gap-2xl) var(--gap-s) var(--gap-xl) ",
  };

  //   (e) => {
  //   navigate(`/employee/${user.id}`);
  // }

  const handleClickEmployee: (id: string | number) => void = (id) => {
    navigate(`/employee/${id}`);
  };
  const tableRowElement = (user: Employees) => (
    <Table.TRow key={user.id} onClick={() => handleClickEmployee(user.id)}>
      <Table.TCell className={s.tableCell}>
        <div className={s.tableUser}>
          <Circle size={40} imageUrl={avatar} />
          <Gap size="m" direction="horizontal" />
          <Typography.Text view="primary-small" tag="span">
            {`${user.first_name} ${user.middle_name} ${user.last_name} `}
          </Typography.Text>
        </div>
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        <Typography.Text view="primary-small" tag="span">
          {`${user.position}, ${user.grade}  `}
        </Typography.Text>
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        {user.mentor ? <img src={mentorIcon} alt="mentor" /> : null}
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        <div className={s.status}>
          <Status view="contrast" color={"green"} key={"green"}>
            {user.idp.status}
          </Status>
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
            МЕНТОР
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
          {users.length > 1 ? users.map((user) => tableRowElement(user)) : null}
        </Table.TBody>
      </TableCustomWrapper>
    </div>
  );
};

export default TeamList;
