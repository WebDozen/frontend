import Head from "../../components/Head/Head"
import { Gap } from "@alfalab/core-components/gap"

import style from "./ManagerPage.module.scss"

const ManagerPage = () => {
  return (
    <div className={style.content}>
      <Head></Head>
      <Gap size="3xl" />
    </div>
  )
}

ManagerPage.propTypes = {}

export default ManagerPage
