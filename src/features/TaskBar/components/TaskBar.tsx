import { List, TaskBar as React95TaskBar } from "@react95/core";

import { useModalToggle } from "../../../hooks";
import { AboutMe } from "./TaskBarItems";

export const TaskBar: React.FC = () => {
  // const {
  //   isModalOpen: isContactMeOpen,
  //   openModal: openContactMe,
  //   closeModal: closeContactMe,
  // } = useModalToggle(false);

  const {
    isModalOpen: isAboutMeOpen,
    openModal: openAboutMe,
    closeModal: closeAboutMe,
  } = useModalToggle(true);

  return (
    <>
      {/* {isContactMeOpen && <ContactMe.Window closeModal={closeContactMe} />} */}
      {isAboutMeOpen && <AboutMe.Window closeModal={closeAboutMe} />}

      <React95TaskBar
        list={
          <List>
            {/* <ContactMe.ListItem openModal={openContactMe} />
            <List.Divider /> */}
            <AboutMe.ListItem openModal={openAboutMe} />
          </List>
        }
      />
    </>
  );
};
