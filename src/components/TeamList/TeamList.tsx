import React from "react"
import PropTypes from "prop-types"
import { Table } from "@alfalab/core-components/table"
import { Typography } from "@alfalab/core-components/typography"
import { Status } from "@alfalab/core-components/status"
import mentorIcon from "./../../images/personalManagerIcon.svg"
import chevronIcon from "./../../images/chevron-left-shift-right_s.svg"
import s from "./TeamList.module.scss"

import avatar from "./../../images/employeeAvatar.png"
import { Gap } from "@alfalab/core-components/gap"

const TeamList = () => {
  // const styleTableCell = { paddingLeft: "12px", paddingRight: "12px" }
  const styleTableCell = {
    padding: "var(--gap-2xl) var(--gap-s) var(--gap-xl) ",
  }

  // const styleTableCell = { paddingLeft: 0, paddingRight: 0, margin: 0 }
  // const styleTableCell = { padding: 0 }

  return (
    <div>
      <Table
        // compactView={true}
        // compactHorizontal={true}
        className={s.table}
      >
        <Table.THead>
          <Table.THeadCell
            className={s.tableHeadCell}
            title="НАЗВАНИЕ ИПР"
            width={404}
            style={styleTableCell}
          >
            СОТРУДНИК
          </Table.THeadCell>

          <Table.THeadCell
            className={s.tableHeadCell}
            title="СРОК ВЫПОЛНЕНИЯ"
            width={416}
            style={styleTableCell}
          >
            ДОЛЖНОСТЬ, ГРЕЙД
          </Table.THeadCell>

          <Table.THeadCell
            className={s.tableHeadCell}
            title="МЕНТОР"
            style={styleTableCell}
          >
            МЕНТОР
          </Table.THeadCell>
          <Table.THeadCell
            className={s.tableHeadCell}
            width={240}
            title="СТАТУС ПОСЛЕДНЕГО ИПР"
            style={styleTableCell}
          >
            СТАТУС ПОСЛЕДНЕГО ИПР
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          <Table.TRow>
            <Table.TCell className={s.tableCell}>
              {/* <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--gap-m)",
                }}
              > */}
              <img src={avatar} alt="avatar" className={s.tableAvatart} />
              <Gap size="m" direction="horizontal" />
              <Typography.Text view="primary-small" tag="span">
                Максимова Дарья Олеговна
              </Typography.Text>
              {/* </div> */}
            </Table.TCell>

            <Table.TCell className={s.tableCell}>
              <Typography.Text view="primary-small" tag="span">
                Backend Разработчик, Junior
              </Typography.Text>
            </Table.TCell>

            <Table.TCell className={s.tableCell}>
              <img src={mentorIcon} alt="mentor" />
            </Table.TCell>

            <Table.TCell>
              <div className={s.status}>
                <Status view="soft" color={"green"} key={"green"}>
                  ВЫПОЛНЕН
                </Status>
                <img src={chevronIcon} alt="шеврон вправо" />
              </div>
            </Table.TCell>
          </Table.TRow>
        </Table.TBody>
      </Table>
    </div>
  )
}

TeamList.propTypes = {}

export default TeamList
