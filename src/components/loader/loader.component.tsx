import React from "react";
import styles from "../../../styles/Loader.module.scss";
import { LoaderIcon } from "../../icons/loaderIcon";

export const Loader = React.memo(() => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <LoaderIcon />
      </div>
    </div>
  );
});

Loader.displayName = "Loader";
