import { styled } from "@xstyled/styled-components";
import { ReactElement } from "react";

import { useModalToggle } from "../../hooks/useModalToggle";
import { IIconComponent, IModalProps } from "../../types/interfaces";
import { Window } from "../Window";

const ShorcutIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  width: 75px;
  height: 50px;

  span {
    text-align: center;
    color: ${(props) => props.color ?? "white"};
  }
`;

export interface IShortcut {
  children: ReactElement;
  defaultOpen?: boolean;
  icon: IIconComponent;
  modalProps?: IModalProps;
  textColor?: string;
  title: string;
}

export const Shortcut: React.FC<IShortcut> = ({
  children,
  defaultOpen,
  textColor,
  icon: Icon,
  modalProps = {},
  title,
}) => {
  const { isModalOpen, closeModal, openModal } = useModalToggle(
    defaultOpen ?? false
  );

  return (
    <>
      {isModalOpen && (
        <Window
          closeModal={closeModal}
          icon={Icon}
          title={title}
          modalProps={modalProps}
        >
          {children}
        </Window>
      )}

      <ShorcutIconWrapper onClick={openModal} color={textColor}>
        <Icon variant="32x32_4" />
        <span>{title}</span>
      </ShorcutIconWrapper>
    </>
  );
};
