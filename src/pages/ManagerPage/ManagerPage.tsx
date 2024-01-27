import style from "./ManagerPage.module.scss";
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock";
import TeamList from "../../components/TeamList/TeamList";

const ManagerPage = () => {
  return (
    <div className={style.content}>
      <TeamInfoBlock />
      <TeamList />
    </div>
  );
};

export default ManagerPage;
