import React from "react"
import PropTypes from "prop-types"
import { GenericWrapper } from "@alfalab/core-components/generic-wrapper"
import { Underlay } from "@alfalab/core-components/underlay"
import { CircularProgressBar } from "@alfalab/core-components/circular-progress-bar"
import { Typography } from "@alfalab/core-components/typography"
import style from "./TeamInfoBlock.module.scss"

const TeamInfoBlock = () => {
  return (
    <div className={style.infoBlock}>
      <div className={style.infoContainer}>
        <div className={style.infoWrapper}>
          <h4 className={style.infoTitle}>В вашем отделе {7} сотрудников</h4>
          <span className={style.infoText}> Назначено ИПР</span>
          <span className={style.infoTextExtra}>{6}</span>
        </div>

        <CircularProgressBar value={80} title="80%" size="l" />
      </div>
    </div>
  )
}

TeamInfoBlock.propTypes = {}

export default TeamInfoBlock
