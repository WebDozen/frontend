import style from "./MainManagerPage.module.scss";
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock";
import TeamList from "../../components/TeamList/TeamList";
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage";

const MainManagerPage = () => {

  const role = "employee";

  const activeIPRs = false;

  return (
    <div className={style.content}>
      <TeamInfoBlock />
      {(role === "employee" && !activeIPRs) && 
      <NewPlanMessage />}
      <TeamList />
    </div>
  );
};

export default MainManagerPage;
