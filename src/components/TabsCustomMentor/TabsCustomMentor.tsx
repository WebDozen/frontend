import { useState } from "react";
import { Tabs, Tab } from "../ui-kit";
import IdpList from "../IdpList/IdpList";
import TeamList from "../TeamList/TeamList";

const TabsCustomMentor = () => {
  const TABS = [
    {
      title: "Мой ИПР",
      id: "tab-1",
      comp: <IdpList />,
    },
    {
      title: "Делегированные ИПР",
      id: "tab-2",
      comp: <TeamList />,
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
      {selectedTab ? selectedTab.comp : null}
    </>
  );
};

export default TabsCustomMentor;
