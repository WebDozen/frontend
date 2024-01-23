import {
  Table,
  Typography,
  NoShape,
  Status,
  ChevronRightShiftRightSIcon,
} from ".."
import styleTask from "./TaskList.module.scss"

export default function TaskList() {
  const data = Array.from({ length: 5 }, (_, i) => i + 1).map(idx => ({
    id: idx,
    title: `Название задачи ${idx}`,
  }))

  return (
    <div className={styleTask.table}>
      <Table>
        <Table.THead>
          <Table.THeadCell title="Задачи">Задачи</Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          {data.map(row => (
            <Table.TRow>
              <Table.TCell className={styleTask.cell}>
                <Typography.Text
                  className={styleTask.cellText}
                  view="primary-small"
                  tag="p"
                  defaultMargins={false}
                  color="primary"
                  style={{ fontFamily: "SF Pro Text" }}
                >
                  {row.title}
                </Typography.Text>
                <Status view="soft" color={"green"} key={"green"}>
                  ВЫПОЛНЕНА
                </Status>
                <NoShape
                  className={styleTask.chevron}
                  size={16}
                  backgroundIcon={ChevronRightShiftRightSIcon}
                  backgroundColor="transparent"
                />
              </Table.TCell>
            </Table.TRow>
          ))}
        </Table.TBody>
      </Table>
    </div>
  )
}
