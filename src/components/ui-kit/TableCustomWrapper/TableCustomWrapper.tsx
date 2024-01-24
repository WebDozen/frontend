import type { TableProps } from "@alfalab/core-components/table/components"
import { Table } from "@alfalab/core-components/table/components"
import s from "./TableWrapper.module.scss"

const TableCustomWrapper = (props: TableProps) => {
  return (
    <Table className={s.table} {...props}>
      {props.children}
    </Table>
  )
}

TableCustomWrapper.propTypes = {}

export default TableCustomWrapper
