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

const TeamList = () => {
  const navigate = useNavigate();
  const { list, loading, error } = useAppSelector(getEmployeesListData);
  console.log(list, loading, error);

  const styleTableCell = {
    padding: "var(--gap-2xl) var(--gap-s) var(--gap-xl) ",
  };

  let users = [
    {
      id: 12,
      avatar: avatar,
      name: "Волкова Елена Николаевна",
      specialty: "Frontend Разработчик, Middle",
      mentor: { id: 123 },
      status: "выполнен",
    },
    {
      id: 13,
      avatar: avatar,
      name: "Карпова ирина Владимирвна",
      specialty: "Backend Разработчик, Junior",
      mentor: { id: 123 },
      status: "выполнен",
    },
    {
      id: 1123,
      avatar: avatar,
      name: "Степанов Игорь Викторович",
      specialty: "Devops Инженер, Middle",
      mentor: { id: 123 },
      status: "выполнен",
    },
    {
      id: 1,
      avatar: avatar,
      name: "Филатова Мария Анатольевна",
      specialty: "Тестировшик ПО, Junior +",
      mentor: { id: 123 },
      status: "выполнен",
    },
    {
      id: 32,
      avatar: avatar,
      name: "Максимова Дарья Олеговна",
      specialty: "Backend Разработчик, Senior",
      mentor: "",
      status: "выполнен",
    },
  ];

  const tableRowElement = (user: {
    id: number;
    avatar: string;
    name: string;
    specialty: string;
    mentor: any;
    status: string;
  }) => (
    <Table.TRow
      key={user.id}
      onClick={(e) => {
        navigate(`/employee/${user.id}`);
      }}
    >
      <Table.TCell className={s.tableCell}>
        <div className={s.tableUser}>
          <Circle size={40} imageUrl={user.avatar} />
          <Gap size="m" direction="horizontal" />
          <Typography.Text view="primary-small" tag="span">
            {user.name}
          </Typography.Text>
        </div>
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        <Typography.Text view="primary-small" tag="span">
          {user.specialty}
        </Typography.Text>
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        {user.mentor?.id ? <img src={mentorIcon} alt="mentor" /> : null}
      </Table.TCell>

      <Table.TCell className={s.tableCell}>
        <div className={s.status}>
          <Status view="soft" color={"green"} key={"green"}>
            {user.status}
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

        <Table.TBody>{users.map((user) => tableRowElement(user))}</Table.TBody>
      </TableCustomWrapper>
    </div>
  );
};

export default TeamList;
