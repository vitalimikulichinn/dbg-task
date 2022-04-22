import React from "react";
import styles from "../../../styles/Person.module.scss";

interface TabBarProps {
  config: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TabBar: React.FC<TabBarProps> = React.memo(
  ({ config, activeTab, setActiveTab }) => {
    return (
      <div className={styles.tabBar}>
        {config.map((item) => (
          <div
            key={item}
            className={`${styles.bar} ${
              activeTab === item ? styles.bar_active : ""
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
);

TabBar.displayName = "TabBar";
