import { useState } from "react"
import { Gap, Tabs, Tab } from "../.."
import TaskDescription from "./TaskDescription/TaskDescription"
import TaskComments from "./TaskComments/TaskComments"

const fakeProps1 =
  "Избегание конфликтов в команде приводит к ещё большим проблемам. Давай разберёмся, почему возникают разногласия, чем они полезны, и какие методы управления конфликтами в организации можно использовать. По ходу прочтения задавай свои вопросы, а после – обсудим ключевые моменты на созвоне."
const fakeProps2 = "Hellooooooooo"

const TabsCustom = () => {
  const TABS: {
    title: string
    id: string
    comp: React.ReactNode
  }[] = [
    {
      title: "Описание",
      id: "tab-1",
      comp: <TaskDescription children={fakeProps1} />,
    },
    {
      title: "Комментарии",
      id: "tab-2",
      comp: <TaskComments children={fakeProps2} />,
    },
  ]

  const [selectedId, setSelectedId] = useState(TABS[0].id)
  const handleChange = (event: any, { selectedId }: any) => {
    setSelectedId(selectedId)
  }
  const selectedTab = TABS.find(tab => tab.id === selectedId)

  return (
    <>
      <Tabs onChange={handleChange} selectedId={selectedId} size="s">
        {TABS.map(item => (
          <Tab title={item.title} id={item.id} key={item.id} />
        ))}
      </Tabs>
      <Gap size="m" />
      {selectedTab ? selectedTab.comp : null}
    </>
  )
}

export default TabsCustom
