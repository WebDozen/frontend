import { useNavigate } from "react-router-dom";
import {
  Table,
  Typography,
  NoShape,
  ChevronRightShiftRightSIcon,
  TableCustomWrapper,
  StatusComponent,
  Status,
} from "../ui-kit";
import styleTask from "./TaskList.module.scss";
import { getIdpData } from "../../services/selectors";
import { useAppSelector } from "../../services/hook";
import type { TypeTask } from "../../services/idp/types";
import { STATUSES_TASK } from "../../utils/constants";
import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";

export default function TaskList(isOpen: any, onClose: any) {
  const navigate = useNavigate();

  const {
    idp: { tasks: tasks },
    idp,
    loading,
    error,
  } = useAppSelector(getIdpData);

  console.log(idp);

  const tableRowElement = (task: TypeTask) => (
    <Table.TRow
      key={task.id}
      onClick={(e) => {
        //navigate(`/task/${task.id}`);
        <TaskModal isOpen={isOpen} onClose={onClose} />;
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
        <StatusComponent slag_task={task.status.slug} />
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
        <Table.TBody>
          {tasks ? tasks.map((task) => tableRowElement(task)) : null}
        </Table.TBody>
      </TableCustomWrapper>
    </div>
  );
}
