import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalOpenHandler = () => {
    setIsOpen(true);
  };
  const modalCloseHandler = () => {
    setIsOpen(false);
  };

  return { isOpen, modalCloseHandler, modalOpenHandler };
};
