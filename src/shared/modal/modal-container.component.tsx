import React, { ReactElement, useEffect } from "react";
import styles from "../../../styles/Modal.module.scss";
import { CloseIcon } from "../../icons/closeIcon";

interface ModalContainerProps {
  onClose: () => void;
  children: ReactElement;
}

export const ModalContainer: React.FC<ModalContainerProps> = React.memo(
  ({ onClose, children }) => {
    useEffect(() => {
      const overlay = document.querySelector("#modal-overlay");
      const handleOverlayClick = (e: Event) => {
        if ((e.target as Element).id === "modal-overlay") {
          onClose();
        }
      };
      overlay?.addEventListener("click", handleOverlayClick);

      return () => {
        overlay?.removeEventListener("click", handleOverlayClick);
      };
    }, [onClose]);
    return (
      <div className={styles.modalContainer}>
        {children}
        <div className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
    );
  }
);

ModalContainer.displayName = "ModalContainer";
