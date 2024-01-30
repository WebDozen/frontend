import style from "./ManagerPage.module.scss";
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock";
import TeamList from "../../components/TeamList/TeamList";
import { useEffect } from "react";
import { useAppDispatch } from "../../services/hook";
import { getEmployees } from "../../services/actions";
import { Gap } from "../../components/ui-kit";

const ManagerPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className={style.content}>
      <TeamInfoBlock />
      <TeamList />
      <Gap size="7xl" />
    </div>
  );
};

export default ManagerPage;
