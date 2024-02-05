import style from "./ManagerPage.module.scss";
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock";
import TeamList from "../../components/TeamList/TeamList";
import { useEffect } from "react";
import { useAppDispatch } from "../../services/hook";
import { getEmployees, getManagersStatistics } from "../../services/actions";
import { Gap } from "../../components/ui-kit";

const ManagerPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getManagersStatistics());
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className={style.content}>
      <Gap size="3xl" />
      <TeamInfoBlock />
      <TeamList />
      <Gap size="7xl" />
    </div>
  );
};

export default ManagerPage;
