import { Table, Typography, Space, Status } from ".."
import styles from "./IdpList.module.scss"

import mentorIcon from "../../images/personalManagerIcon.svg"
import znak from "../../images/znak.svg"
import chevron from "../../images/chevron-left-shift-right_s.svg"

const IdpList = () => {
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
                <Typography.Text
                  view="primary-small"
                  tag="p"
                  defaultMargins={false}
                  color="primary"
                  style={{ fontFamily: "SF Pro Text" }}
                >
                  {row.title}
                </Typography.Text>
              </Table.TCell>

              <Table.TCell>
                <Space size={2}>
                  <Typography.Text
                    view="primary-small"
                    tag="p"
                    defaultMargins={false}
                    color="primary"
                    style={{ fontFamily: "SF Pro Text" }}
                  >
                    {row.date.toLocaleDateString()}
                  </Typography.Text>
                </Space>
              </Table.TCell>

              <Table.TCell>
                <img src={mentorIcon} alt="Иконка ментора" />
                {row.id === 6 && (
                  <img src={znak} alt="Иконка восклицательного знака" />
                )}
              </Table.TCell>

              <Table.TCell>
                <div className={styles.statusBlock}>
                  {
                    <>
                      {(row.id === 1 || row.id > 6) && (
                        <Status view="soft" color={"green"} key={"green"}>
                          ВЫПОЛНЕН
                        </Status>
                      )}
                      {row.id === 2 && (
                        <Status view="soft" color={"blue"} key={"blue"}>
                          В РАБОТЕ
                        </Status>
                      )}
                      {row.id === 3 && (
                        <Status view="soft" color={"grey"} key={0}>
                          ОТМЕНЕН
                        </Status>
                      )}
                      {row.id === 4 && (
                        <Status view="soft" color={"orange"} key={"orange"}>
                          НА РЕВЬЮ
                        </Status>
                      )}
                      {row.id === 5 && (
                        <Status view="soft" color={"red"} key={"red"}>
                          ПРОСРОЧЕН
                        </Status>
                      )}
                      {row.id === 6 && (
                        <Status view="soft" color={"teal"} key={"teal"}>
                          ОТКРЫТ
                        </Status>
                      )}
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

export default IdpList
