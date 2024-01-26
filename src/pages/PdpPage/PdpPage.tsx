import { Gap } from "../../components"
import { useState } from "react"
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard"
import MentorArea from "../../components/MentorArea/MentorArea"
import TaskDescription from "../../components/TaskDescription/TaskDescription"
import CommentsList from "../../components/CommentsList/CommentsList"
import PdpCommentSending from "../../components/PdPCommentSending/PdpCommentSending"
import PlateWrapper from "../../components/PlateWrapper/PlateWrapper"

const PdpPage = () => {
  const [activeIPRs, setActiveIPRs] = useState(false)

  return (
    <div>
      <MentorArea status="green" />
      <Gap size="2xl" />
      <EmployeeCard activeIPRs={!activeIPRs} />
      <TaskDescription />
      <Gap size="2xl" />
      <PlateWrapper />
      <Gap size="xl" />
      <CommentsList>Времянка под комменты</CommentsList>
      <Gap size="3xl" />
      <PdpCommentSending />
      <Gap size="7xl" />
    </div>
  )
}

PdpPage.propTypes = {}

export default PdpPage
