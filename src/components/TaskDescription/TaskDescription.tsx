import TaskList from "../TaskList/TaskList"
import PlanDescription from "../PlanDescription/PlanDescription"
import style from "./TaskDescription.module.scss"
import { Gap } from ".."

export default function TaskDescription() {
  return (
    <div className={style.block}>
      <TaskList />
      <Gap size="xl" />
      <PlanDescription />
    </div>
  );
}
