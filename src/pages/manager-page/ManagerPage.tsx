import { Gap } from "@alfalab/core-components/gap"

import style from "./ManagerPage.module.scss"
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock"
import TeamList from "../../components/TeamList/TeamList"

const ManagerPage = () => {
  return (
    <div className={style.content}>
      <Gap size="3xl" />
      <TeamInfoBlock />
      <TeamList />
    </div>
  )
}

ManagerPage.propTypes = {}

export default ManagerPage
