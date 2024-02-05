import TaskList from "../TaskList/TaskList";
import PlanDescription from "../PlanDescription/PlanDescription";
import style from "./TaskDescription.module.scss";
import { Gap } from "../ui-kit";
import { useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";
import NoTaskMessage from "../NoTaskMessage/NoTaskMessage";

export default function TaskDescription() {
  const { idp } = useAppSelector(getIdpData);

  return (
    <div className={style.block}>
      {idp.tasks?.length ? <TaskList /> : <NoTaskMessage />}
      <Gap size="2xl" />
      <PlanDescription />
    </div>
  );
}
