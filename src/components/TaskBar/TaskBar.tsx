import { List, TaskBar as React95TaskBar } from "@react95/core";
import { ScrollingMarquee100 } from "@react95/icons";

import { useModalToggle } from "../../hooks/useModalToggle";
import { Window } from "../Window";

export const TaskBar: React.FC = () => {
  const {
    isModalOpen: isTestOpen,
    openModal: openTest,
    closeModal: closeTest,
  } = useModalToggle(false);

  return (
    <>
      {isTestOpen && (
        <Window closeModal={closeTest} icon={ScrollingMarquee100} title="Test">
          <h1>Test</h1>
        </Window>
      )}

      <React95TaskBar
        list={
          <List>
            <List.Item
              icon={<ScrollingMarquee100 variant="32x32_4" />}
              onClick={openTest}
            >
              Test
            </List.Item>
          </List>
        }
      />
    </>
  );
};
