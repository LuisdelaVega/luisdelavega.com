import { List, TaskBar as React95TaskBar } from "@react95/core";
import { Conflnk103, HelpBook } from "@react95/icons";

import { useModalToggle } from "../../hooks/useModalToggle";
import { Window } from "../Window";

export const TaskBar: React.FC = () => {
  const {
    isModalOpen: isContactMeOpen,
    openModal: openContactMe,
    closeModal: closeContactMe,
  } = useModalToggle(false);
  const {
    isModalOpen: isAboutMeOpen,
    openModal: openAboutMe,
    closeModal: closeAboutMe,
  } = useModalToggle(true);

  return (
    <>
      {isContactMeOpen && (
        <Window
          closeModal={closeContactMe}
          icon={Conflnk103}
          title="Contact Me"
        >
          <h1>Contact Me</h1>
        </Window>
      )}

      {isAboutMeOpen && (
        <Window
          closeModal={closeAboutMe}
          icon={HelpBook}
          title="About Me"
          modalProps={{ style: { height: "30vh" } }}
        >
          <h1>About Me</h1>
        </Window>
      )}

      <React95TaskBar
        list={
          <List>
            <List.Item
              icon={<Conflnk103 variant="32x32_4" />}
              onClick={openContactMe}
            >
              Contact Me
            </List.Item>

            <List.Divider />

            <List.Item
              icon={<HelpBook variant="32x32_4" />}
              onClick={openAboutMe}
            >
              About Me
            </List.Item>
          </List>
        }
      />
    </>
  );
};
