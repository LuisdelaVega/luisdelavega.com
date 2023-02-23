import { useCallback, useState } from "react";

export function useModalToggle(initialState: boolean): {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
} {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return { isModalOpen, openModal, closeModal };
}
