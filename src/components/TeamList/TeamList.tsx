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

  // let users = [
  //   {
  //     id: 12,
  //     avatar: avatar,
  //     name: "Волкова Елена Николаевна",
  //     specialty: "Frontend Разработчик, Middle",
  //     mentor: { id: 123 },
  //     status: "выполнен",
  //   },
  //   {
  //     id: 13,
  //     avatar: avatar,
  //     name: "Карпова ирина Владимирвна",
  //     specialty: "Backend Разработчик, Junior",
  //     mentor: { id: 123 },
  //     status: "выполнен",
  //   },
  //   {
  //     id: 1123,
  //     avatar: avatar,
  //     name: "Степанов Игорь Викторович",
  //     specialty: "Devops Инженер, Middle",
  //     mentor: { id: 123 },
  //     status: "выполнен",
  //   },
  //   {
  //     id: 1,
  //     avatar: avatar,
  //     name: "Филатова Мария Анатольевна",
  //     specialty: "Тестировшик ПО, Junior +",
  //     mentor: { id: 123 },
  //     status: "выполнен",
  //   },
  //   {
  //     id: 32,
  //     avatar: avatar,
  //     name: "Максимова Дарья Олеговна",
  //     specialty: "Backend Разработчик, Senior",
  //     mentor: "",
  //     status: "выполнен",
  //   },
  // ];

  // id: number;
  // mentor: boolean;
  // last_name: string;
  // first_name: string;
  // middle_name: string;
  // grade: string;
  // position: string;
  // idp: {
  //   status: string;
  //   has_task: boolean;
  //   total_completed_idps: number;
  //   completed_tasks_count: number;
  //   total_idps_count: number;
  // };

  const tableRowElement = (user: Employees) => (
    <Table.TRow
      key={user.id}
      onClick={(e) => {
        navigate(`/employee/${user.id}`);
      }}
    >
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
