import React, { useCallback } from "react";
import styles from "../../../styles/Input.module.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = React.memo(
  ({ value, onChange, className }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <input
        type="text"
        onChange={handleChange}
        value={value}
        className={`${styles.input} ${className ? className : ""}`}
      />
    );
  }
);

Input.displayName = "Input";
