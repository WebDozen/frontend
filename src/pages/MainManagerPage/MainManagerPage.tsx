import style from "./MainManagerPage.module.scss";
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock";
import TeamList from "../../components/TeamList/TeamList";
import { Gap } from "../../components/ui-kit";

const MainManagerPage = () => {

  return (
    <div className={style.content}>
      <TeamInfoBlock />
      <TeamList />
      <Gap size="7xl" />
    </div>
  );
};

export default MainManagerPage;
