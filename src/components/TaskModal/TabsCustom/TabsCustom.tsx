import { useState } from "react";
import { Gap, Tabs, Tab } from "../../ui-kit";
import TaskDescription from "./TaskDescription/TaskDescription";
import TaskComments from "./TaskComments/TaskComments";

type Props = { description: string; task_id: string };

const TabsCustom: React.FC<Props> = ({ description, task_id }) => {
  const TABS = [
    {
      title: "Описание",
      id: "tab-1",
      comp: <TaskDescription children={description} />,
    },
    {
      title: "Комментарии",
      id: "tab-2",
      comp: <TaskComments task_id={task_id} />,
    },
  ];

  const [selectedId, setSelectedId] = useState(TABS[0].id);
  const handleChange = (event: any, { selectedId }: any) =>
    setSelectedId(selectedId);
  const selectedTab = TABS.find((tab) => tab.id === selectedId);

  return (
    <>
      <Tabs onChange={handleChange} selectedId={selectedId} size="s">
        {TABS.map((item) => (
          <Tab title={item.title} id={item.id} key={item.id} />
        ))}
      </Tabs>
      <Gap size="m" />
      {selectedTab ? selectedTab.comp : null}
    </>
  );
};

export default TabsCustom;
