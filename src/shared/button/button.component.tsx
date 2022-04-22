import React from "react";
import styled from "../../../styles/Button.module.scss";

interface ButtonProps {
  text?: string;
  icon?: () => JSX.Element;
  filled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ text, icon: Icon, filled, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`${filled ? styled.buttonFilled : styled.buttonPrimary} ${
          className ? className : ""
        }`}
      >
        {Icon ? <Icon /> : null}
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";
