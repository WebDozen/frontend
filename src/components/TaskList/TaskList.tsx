import { useNavigate } from "react-router-dom";
import {
  Table,
  Typography,
  NoShape,
  Status,
  ChevronRightShiftRightSIcon,
  TableCustomWrapper,
} from "../ui-kit";
import styleTask from "./TaskList.module.scss";

export default function TaskList() {
  const navigate = useNavigate();

  const data = Array.from({ length: 5 }, (_, i) => i + 1).map((idx) => ({
    id: idx,
    name: `Название задачи ${idx}`,
  }));

  const tableRowElement = (task: {
    id: number;
    name: string;
    // status: string;
  }) => (
    <Table.TRow
      key={task.id}
      onClick={(e) => {
        navigate(`/task/${task.id}`);
      }}
    >
      <Table.TCell className={styleTask.cell}>
        <Typography.Text
          className={styleTask.cellText}
          view="primary-small"
          tag="p"
          defaultMargins={false}
          color="primary"
          style={{ fontFamily: "SF Pro Text" }}
        >
          {task.name}
        </Typography.Text>
        <Status view="soft" color={"green"} key={"green"}>
          ВЫПОЛНЕНА
        </Status>
        <NoShape
          className={styleTask.chevron}
          size={16}
          backgroundIcon={ChevronRightShiftRightSIcon}
          backgroundColor="transparent"
        />
      </Table.TCell>
    </Table.TRow>
  );

  return (
    <div className={styleTask.table}>
      <TableCustomWrapper>
        <Table.THead rowClassName={styleTask.tableHead}>
          <Table.THeadCell className={styleTask.tableHeadCell} title="Задачи">
            Задачи
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>{data.map((task) => tableRowElement(task))}</Table.TBody>
      </TableCustomWrapper>
    </div>
  );
}
