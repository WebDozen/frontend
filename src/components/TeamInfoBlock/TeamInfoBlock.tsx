// import React from 'react'
// import PropTypes from 'prop-types'
import { GenericWrapper } from "@alfalab/core-components/generic-wrapper"
import { Underlay } from "@alfalab/core-components/underlay"
import { Gap } from "@alfalab/core-components/gap"
import { CircularProgressBar } from "@alfalab/core-components/circular-progress-bar"
import { Space } from "@alfalab/core-components/space"
import s from "./TeamInfoBlock.module.scss"

const TeamInfoBlock = () => {
  return (
    <div className={s.container}>
      <Underlay borderRadius="xl" backgroundColor="secondary" padding="xl">
        <GenericWrapper grow={true} justifyContent="between">
          <GenericWrapper column={true} justifyContent="between">
            <h4 className={s.infoHeadline}>В вашем отделе {7} сотрудников</h4>
            <Gap size="m" />
            <span className={s.infoSubtitle}>Назначено ИПР</span>
            <Gap size="xs" />
            <span className={s.infoText}>{6}</span>
          </GenericWrapper>
          <CircularProgressBar value={80} title="80%" size="l" height={80} />
        </GenericWrapper>
      </Underlay>
      <Underlay borderRadius="xl" backgroundColor="secondary" padding="xl">
        <GenericWrapper grow={true} column={true} justifyContent="between">
          <h4 className={s.infoHeadline}>В вашем отделе {7} сотрудников</h4>
          <Gap size="m" />
          <GenericWrapper column={true} justifyContent="between">
            <Space align="end" className={s.custom} direction="horizontal">
              <div>
                <span className={s.infoSubtitle}>Не назначены</span>
                <Gap size="xs" />
                <span className={s.infoText}>{6}</span>
              </div>
              <div className={s.customLine}></div>
              <div>
                <span className={s.infoSubtitle}>Нет задач</span>
                <Gap size="xs" />
                <span className={s.infoText}>{6}</span>
              </div>
              <div className={s.customLine}></div>
              <div>
                <span className={s.infoSubtitle}>Просрочено</span>
                <Gap size="xs" />
                <span className={s.infoText}>{6}</span>
              </div>
              <div className={s.customLine}></div>
              <div>
                <span className={s.infoSubtitle}>Ожидают ревью</span>
                <Gap size="xs" />
                <span className={s.infoText}>{6}</span>
              </div>
            </Space>
          </GenericWrapper>
        </GenericWrapper>
      </Underlay>
    </div>
  )
}

TeamInfoBlock.propTypes = {}

export default TeamInfoBlock
