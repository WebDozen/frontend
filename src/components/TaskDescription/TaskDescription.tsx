import TaskList from "../TaskList/TaskList";
import PlanDescription from "../PlanDescription/PlanDescription";
import style from "./TaskDescription.module.scss";
import { Gap } from "../ui-kit";
import { useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";

export default function TaskDescription() {
  const {
    idp,
    loading,
    error,
  } = useAppSelector(getIdpData);
  
  return (
    <div className={style.block}>
      <TaskList />
      <Gap size="xl" />
      <PlanDescription />
    </div>
  );
}
