import TaskList from "../TaskList/TaskList"
import PlanDescription from "../PlanDescription/PlanDescription"
import style from "./TaskDescription.module.scss"

export default function TaskDescription() {
  return (
    <div className={style.block}>
      <TaskList />
      <PlanDescription />
    </div>
  )
}
