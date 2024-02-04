import { useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hook";
import { getEmployeeData, getIdpData } from "../../services/selectors";
import { ProgressBar, Skeleton, Space } from "../ui-kit";

import styleStatus from "./InfoProgressStatusBar.module.scss";

export default function InfoProgressStatusBar() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { idp_id } = useParams();
  
  const { employee, loading} = useAppSelector(getEmployeeData);
  const { idp } = useAppSelector(getIdpData);

  const valueZero =
    employee.idp.completed_tasks_count === 0 &&
    employee.idp.total_tasks_count === 0;

   const valueZeroInIdp =
   idp.statistic?.task_done === 0 &&
   idp.statistic?.count_task === 0;

  return (
    <div className={styleStatus.infoProgress}>
      <div className={styleStatus.infoTextBlock}>
        <p className={styleStatus.infoProgressStatus}>Задач по текущему ИПР</p>
        <Skeleton visible={loading}>
        {pathname === `employee/${id}/idp/${idp_id}` ?

       (<p className={styleStatus.infoProcent}>
          <span
            className={styleStatus.infoProcentBold}
          >
            {`${idp.statistic.task_done}
`}</span>{" "}
          из {`${idp.statistic.count_task}`}
  </p> ) :

  (<p className={styleStatus.infoProcent}>
    <span
      className={styleStatus.infoProcentBold}
    >
      {`${employee.idp.completed_tasks_count}
`}</span>{" "}
    из {`${employee.idp.total_tasks_count}`}
</p> )
}
  </Skeleton>
      </div>
      <Space size={20} fullWidth>
      <Skeleton visible={loading}>
  {pathname === `employee/${id}/idp/${idp_id}` ?
    <ProgressBar
      view="positive"
      size="s"
      value={
        valueZeroInIdp
          ? 0
          : (idp.statistic?.task_done /
              idp.statistic?.count_task) *
            100
      }
  
    />    :

        <ProgressBar
          view="positive"
          size="s"
          value={
            valueZero
              ? 0
              : (employee.idp.completed_tasks_count /
                  employee.idp.total_tasks_count) *
                100
          }
        />
}
</Skeleton>
      </Space>
    </div>
  );
}
