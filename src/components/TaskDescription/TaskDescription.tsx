import TaskList from "../TaskList/TaskList";
import PlanDescription from "../PlanDescription/PlanDescription";
import style from "./TaskDescription.module.scss";
import { Gap } from "../ui-kit";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getIdpData } from "../../services/selectors";
import { useEffect } from "react";
import { getIdpByID } from "../../services/actions";
import { useParams } from "react-router-dom";
import NoTaskMessage from "../NoTaskMessage/NoTaskMessage";

export default function TaskDescription() {

   const {
    idp : {tasks: tasks}, idp,
    loading,
    error,
  } = useAppSelector(getIdpData);
  
  return (
    <div className={style.block}>

      {idp.tasks?.length ? <TaskList /> : <NoTaskMessage />}
      <Gap size="xl" />
      <PlanDescription />
    </div>
  );
}
