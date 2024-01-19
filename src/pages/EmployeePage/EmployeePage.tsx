// import React from "react"
// import PropTypes from "prop-types"
import DPDList from "../../components/DPDList/DPDList"
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard"
import PlateSuccess from "../../components/PlateSuccess/PlateSuccess"

const EmployeePage = () => {
  return (
    <div>
      <EmployeeCard />
      <PlateSuccess />
      <DPDList />
    </div>
  )
}

EmployeePage.propTypes = {}

export default EmployeePage
