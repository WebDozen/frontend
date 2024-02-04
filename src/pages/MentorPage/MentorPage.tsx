import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByID, getEmployees, getIdps } from "../../services/actions";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getEmployeeData } from "../../services/selectors";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import TabsCustomMentor from "../../components/TabsCustomMentor/TabsCustomMentor";
import { Gap } from "../../components/ui-kit";
import styles from "./MentorPage.module.scss";

const MentorPage = () => {
  type Params = {
    id: string;
  };

  const { id } = useParams<Params>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployees());
    dispatch(getEmployeeByID(id));
    dispatch(getIdps(id));
  }, [dispatch]);

  const {
    employee: { is_mentor },
    loading,
    error,
  } = useAppSelector(getEmployeeData);

  return (
    <div className={styles.content}>
      <Gap size="3xl" />
      <EmployeeCard />
      <Gap size="2xl" />
      {is_mentor && <TabsCustomMentor />}
      <Gap size="5xl" />
      {/* !! если все выполнены или отменены,то показываем зеленую плашку только тогда.
       нужно будет переделать !!
      {status === TYPE_SLAG_IDP.completed && (
        <PlateWrapper
          config={plateSuccess}
          view="positive"
          titleText="Сотрудник выполнил все ИПР"
          text="Пришло время создать новый план развития и двигаться к новым целям!"
        />
      )}
      {status === "expired" && (
        <PlateWrapper
          config={plateAttention}
          view="attention"
          titleText="Сотрудник не выполнил последний ИПР"
          text="Возможно, задач было слишком много? Узнайте у сотрудника, что пошло не так, и составьте новый план для развития"
        />
      )}

      {employee.idp.total_idp_count === 0 ? <NewPlanMessage /> : <IdpList />}
 */}
    </div>
  );
};

export default MentorPage;
