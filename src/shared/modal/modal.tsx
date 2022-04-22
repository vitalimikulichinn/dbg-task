import React, { ReactElement } from "react";
import ReactDom from "react-dom";
import styles from "../../../styles/Modal.module.scss";

interface ModalProps {
  children: ReactElement;
}

export const Modal: React.FC<ModalProps> = ({ children }) =>
  ReactDom.createPortal(
    <div className={styles.overlay} id="modal-overlay">
      <div className={styles.modalWindow}>{children}</div>
    </div>,
    document.querySelector("#modal-root") as Element
  );
