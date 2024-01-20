// import React from "react"
// import PropTypes from "prop-types"
import Head from "../../components/Head/Head"
import { Gap } from "@alfalab/core-components/gap"
import { GenericWrapper } from "@alfalab/core-components/generic-wrapper"
import { Underlay } from "@alfalab/core-components/underlay"
import { CircularProgressBar } from "@alfalab/core-components/circular-progress-bar"
import { Typography } from "@alfalab/core-components/typography"
import { PureCell } from "@alfalab/core-components/pure-cell"
import { Table } from "@alfalab/core-components/table"

import style from "./ManagerPage.module.scss"
import TeamInfoBlock from "../../components/TeamInfoBlock/TeamInfoBlock"

const ManagerPage = () => {
  return (
    <div className={style.content}>
      <Head></Head>
      <Gap size="3xl" />
      <TeamInfoBlock />
      <Gap size="3xl" />

      <Gap size="3xl" />

      <div className={style.infoContainer}>
        <Underlay
          padding="xl"
          borderRadius="xl"
          backgroundColor="var(--neutral-translucent-100)"
          contentProps={{}}
        >
          <GenericWrapper column={true}>
            <Typography.Text tag="span">
              В вашем отделе {7} сотрудников
            </Typography.Text>
            <Typography.Text
              tag="span"
              view="secondary-large"
              color="secondary"
              style={{ fontFamily: "SF Pro Text" }}
            >
              Назначено ИПР
            </Typography.Text>
            <Typography.Text tag="span">Назначено ИПР</Typography.Text>
          </GenericWrapper>
          <CircularProgressBar value={80} title="80%" size="l" />
        </Underlay>
        <Underlay
          padding="xl"
          borderRadius="xl"
          backgroundColor="var(--neutral-translucent-100)"
          contentProps={{ axis: "vertical" }}

          // className={style.infoWrapper}
        >
          <Typography.Text tag="span">
            Данные об ИПР сотрудников
          </Typography.Text>
          <Table compactView={true} compactHorizontal={true} wrapper={false}>
            <Table.THead>
              <Table.THeadCell textAlign="center" title="Не назначены">
                Не назначены
              </Table.THeadCell>
              <Table.THeadCell textAlign="center" title="Нет задач">
                Нет задач
              </Table.THeadCell>
              <Table.THeadCell textAlign="center" title="Просрочено">
                Просрочено
              </Table.THeadCell>
              <Table.THeadCell textAlign="center" title="Ожидают ревью">
                Ожидают ревью
              </Table.THeadCell>
            </Table.THead>
            <Table.TBody>
              <Table.TRow withoutBorder={true}>
                <Table.TCell>1</Table.TCell>
                <Table.TCell>1</Table.TCell>
                <Table.TCell>1</Table.TCell>
                <Table.TCell>1</Table.TCell>
              </Table.TRow>
            </Table.TBody>
          </Table>
        </Underlay>
      </div>
      <Gap size="2xl"></Gap>
    </div>
  )
}

ManagerPage.propTypes = {}

export default ManagerPage
