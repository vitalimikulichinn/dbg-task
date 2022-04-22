import React from "react";
import styles from "../../../../styles/Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  name: string;
}

export const Checkbox: React.FC<CheckboxProps> = React.memo(
  ({ label, name }) => {
    return (
      <div>
        <input
          type="checkbox"
          className={styles.customCheckbox}
          id={name}
          name={name}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
