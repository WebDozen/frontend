import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByID, getEmployees, getIdps } from "../../services/actions";
import { useAppDispatch, useAppSelector } from "../../services/hook";
import { getEmployeeData, getUserData } from "../../services/selectors";
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

  // const {
  //   employee: { is_mentor },
  // } = useAppSelector(getEmployeeData);
  const { is_mentor } = useAppSelector(getUserData);

  return (
    <div className={styles.content}>
      <Gap size="3xl" />
      <EmployeeCard />
      <Gap size="2xl" />
      {is_mentor && <TabsCustomMentor />}
      <Gap size="5xl" />
    </div>
  );
};

export default MentorPage;
