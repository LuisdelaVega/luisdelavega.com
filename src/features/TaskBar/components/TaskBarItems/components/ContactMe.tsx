import { List } from "@react95/core";
import { Conflnk103 } from "@react95/icons";

import { Window as WindowComponent } from "../../../../../components";

//#region TaskBar Item
interface IListItemProps {
  openModal: () => void;
}

export const ListItem: React.FC<IListItemProps> = ({ openModal }) => (
  <List.Item icon={<Conflnk103 variant="32x32_4" />} onClick={openModal}>
    Contact Me
  </List.Item>
);
//#endregion TaskBar Item

//#region Window
interface IWindowProps {
  closeModal: () => void;
}

export const Window: React.FC<IWindowProps> = ({ closeModal }) => (
  <WindowComponent
    closeModal={closeModal}
    icon={Conflnk103}
    title="Contact Me"
    // modalProps={{ style: { height: "30vh" } }}
  >
    <h1>Contact Me</h1>
  </WindowComponent>
);
//#endregion Window
