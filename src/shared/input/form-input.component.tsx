import React from "react";
import styles from "../../../styles/Input.module.scss";
import { Action, Actions } from "../../components/edit-profile/edit-profile.helper";

interface InputProps {
  name: string;
  value: string;
  onChange: React.Dispatch<Action>;
  label: string;
}

export const InputForm: React.FC<InputProps> = React.memo(
  ({ name, value, onChange, label }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({
        type: Actions.CHANGE,
        payload: {
          type: name,
          value: e.target.value,
        },
      });
    };

    return (
      <div>
        <label className={styles.label} htmlFor={name}>
          {label}:
        </label>
        <input
          type="text"
          name={name}
          id={name}
          onChange={handleChange}
          value={value}
          className={`${styles.input} ${styles.margin}`}
        />
      </div>
    );
  }
);

InputForm.displayName = "InputForm";
