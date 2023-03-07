import { Frame, Modal } from "@react95/core";
import { ReactElement } from "react";

import { IIconComponent, IModalProps } from "../../types/interfaces";
import { COMMON_FRAME_PROPS, COMMON_MODAL_PROPS } from "../../utils/constants";

export interface IWindow {
  children: ReactElement;
  closeModal: () => void;
  icon: IIconComponent;
  title: string;
  modalProps?: IModalProps;
}

export const Window: React.FC<IWindow> = ({
  children,
  closeModal,
  icon: Icon,
  modalProps,
  title,
}) => (
  <Modal
    closeModal={closeModal}
    icon={<Icon variant="16x16_4" />}
    title={title}
    {...COMMON_MODAL_PROPS}
    {...modalProps}
  >
    <Frame {...COMMON_FRAME_PROPS}>{children}</Frame>
  </Modal>
);
