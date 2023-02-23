import { ModalProps } from "@react95/core/@types/Modal/Modal";

// TODO Type this better
export type IIconComponent = React.FC<any>;

export type IModalProps = Omit<ModalProps, "closeModal" | "icon" | "title">;
