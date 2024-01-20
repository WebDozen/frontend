import { Table } from "@alfalab/core-components/table"
import { Typography } from "@alfalab/core-components/typography"
import { Space } from "@alfalab/core-components/space"
import mentorIcon from "../../images/personalManagerIcon.svg"
import { Status } from "@alfalab/core-components/status"
import chevron from "../../images/chevron-left-shift-right_s.svg"
import styles from "./DPDList.module.scss"

const DPDList = () => {
  const getCurrentDay = function (addDays: any) {
    var date = new Date()
    date.setDate(date.getDate() + addDays)
    return date
  }
  const data = Array.from({ length: 10 }, (_, i) => i + 1).map(idx => ({
    id: idx,
    date: getCurrentDay(idx),
    title: `Название ИПР ${idx}`,
  }))

  return (
    <div className={styles.table}>
      <Table>
        <Table.THead>
          <Table.THeadCell title="НАЗВАНИЕ ИПР" width={484}>
            НАЗВАНИЕ ИПР
          </Table.THeadCell>

          <Table.THeadCell title="СРОК ВЫПОЛНЕНИЯ" width={288}>
            СРОК ВЫПОЛНЕНИЯ
          </Table.THeadCell>

          <Table.THeadCell title="МЕНТОР" width={184}>
            МЕНТОР
          </Table.THeadCell>
          <Table.THeadCell title="СТАТУС ИПР" width={172}>
            СТАТУС ИПР
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          {data.map(row => (
            <Table.TRow key={row.id}>
              <Table.TCell>
                <Typography.Text view="primary-small" tag="div">
                  {row.title}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Space size={2}>
                  <Typography.Text view="primary-small" tag="div">
                    {row.date.toLocaleDateString()}
                  </Typography.Text>
                </Space>
              </Table.TCell>

              <Table.TCell>
                <img src={mentorIcon} alt="Иконка ментора" />
              </Table.TCell>

              <Table.TCell>
                <div className={styles.statusBlock}>
                  {
                    <>
                      <Status view="soft" color={"green"} key={"green"}>
                        ВЫПОЛНЕН
                      </Status>
                      <img
                        src={chevron}
                        alt="шеврон вправо"
                        className={styles.chevron}
                      />
                    </>
                  }
                </div>
              </Table.TCell>
            </Table.TRow>
          ))}
        </Table.TBody>
      </Table>
    </div>
  )
}

export default DPDList
