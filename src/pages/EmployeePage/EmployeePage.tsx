import { useState } from "react"
import DPDList from "../../components/DPDList/DPDList"
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard"
import PlateSuccess from "../../components/PlateSuccess/PlateSuccess"
import NewPlanMessage from "../../components/NewPlanMessage/NewPlanMessage"

const EmployeePage = () => {
  const [activeIPRs, setActiveIPRs] = useState(false)

  return (
    <div>
      <EmployeeCard activeIPRs={activeIPRs} />
      <PlateSuccess />
      <DPDList />
      <NewPlanMessage />
      <EmployeeCard activeIPRs={!activeIPRs} />
    </div>
  )
}

EmployeePage.propTypes = {}

export default EmployeePage
