import React from "react";
import styles from "../../../../styles/Home.module.scss";
import { Header } from "../../header/header.component";

interface MainContainerProps {
  children: JSX.Element;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.pageContainer}>{children}</div>
    </div>
  );
};
